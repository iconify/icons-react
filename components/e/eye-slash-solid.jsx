import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vynv-lb8a.css';
import '../../css/t/t2nfipbqf.css';
import '../../css/h/hiuju4b3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vynv-lb8a"/><path class="t2nfipbqf"/><path class="hiuju4b3k"/></g>`,
		"fallback": "flowbite:eye-slash-solid",
	});
}

export default Component;
