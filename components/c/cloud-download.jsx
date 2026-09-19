import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zfwjbh19v.css';
import '../../css/f/fvc9flxcj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="zfwjbh19v"/><path class="fvc9flxcj"/></g>`,
		"fallback": "si-glyph:cloud-download",
	});
}

export default Component;
