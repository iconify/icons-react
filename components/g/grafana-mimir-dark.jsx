import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbbm33x5p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbbm33x5p"/>`,
		"fallback": "selfhst:grafana-mimir-dark",
	});
}

export default Component;
