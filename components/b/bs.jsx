import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sam6cytxx.css';
import '../../css/u/ubwiz66zy.css';
import '../../css/w/wiacdbgyj.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="sam6cytxx"/><path class="ubwiz66zy"/><path class="wiacdbgyj"/></g>`,
		"fallback": "flagpack:bs",
	});
}

export default Component;
