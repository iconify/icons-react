import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdsmi1bau.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdsmi1bau"/>`,
		"fallback": "selfhst:grafana-light",
	});
}

export default Component;
