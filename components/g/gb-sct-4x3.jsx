import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oln_hsbub.css';
import '../../css/b/bf6u4_bha.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oln_hsbub"/><path transform="scale(128 160)" class="bf6u4_bha"/>`,
		"fallback": "flag:gb-sct-4x3",
	});
}

export default Component;
