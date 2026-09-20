import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6bvshbal.css';
import '../../css/p/pkbw-nbsh.css';
import '../../css/w/w1fud1gaj.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/p/p1gv_vk0o.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGyELhUbwV" class="y6bvshbal"/></defs><path class="pkbw-nbsh"/><path class="w1fud1gaj"/><g class="ij2x_72vy"><use href="#SVGyELhUbwV"/><path class="p1gv_vk0o"/><use href="#SVGyELhUbwV"/></g>`,
		"fallback": "openmoji:gem-stone",
	});
}

export default Component;
