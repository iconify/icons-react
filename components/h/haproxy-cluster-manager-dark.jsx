import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzmn72bbl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzmn72bbl"/>`,
		"fallback": "selfhst:haproxy-cluster-manager-dark",
	});
}

export default Component;
