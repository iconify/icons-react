import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_lxzxuvb.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_lxzxuvb"/>`,
		"fallback": "fa-solid:blender-phone",
	});
}

export default Component;
