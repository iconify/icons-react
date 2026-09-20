import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gojqxob8u.css';
import '../../css/w/wegovcbtf.css';
import '../../css/x/x2xnvjbkm.css';
import '../../css/z/z3e5vlvla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gojqxob8u"/><path class="wegovcbtf"/><circle class="x2xnvjbkm"/><path class="z3e5vlvla"/></g>`,
		"fallback": "lets-icons:chat-search-duotone",
	});
}

export default Component;
