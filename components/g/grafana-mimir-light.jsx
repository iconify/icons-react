import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w39ea_d2k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w39ea_d2k"/>`,
		"fallback": "selfhst:grafana-mimir-light",
	});
}

export default Component;
