import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/swosvdkra.css';
import '../../css/f/f11xt5mlf.css';
import '../../css/d/de49kbcou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="swosvdkra"/><path clip-rule="evenodd" class="f11xt5mlf"/><path class="de49kbcou"/></g>`,
		"fallback": "heroicons:building-library-solid",
	});
}

export default Component;
