import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uf842gvyf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uf842gvyf"/>`,
		"fallback": "fa-solid:external-link-alt",
	});
}

export default Component;
