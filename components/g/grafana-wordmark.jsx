import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vf__9iawb.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vf__9iawb"/>`,
		"fallback": "devicon-plain:grafana-wordmark",
	});
}

export default Component;
