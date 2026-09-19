import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wqwf-7vsq.css';
import '../../css/k/khridfthj.css';
import '../../css/t/tx3cz95-i.css';
import '../../css/t/teg71prch.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wqwf-7vsq"/><path clip-rule="evenodd" class="khridfthj"/><path clip-rule="evenodd" class="tx3cz95-i"/><path class="teg71prch"/></g>`,
		"fallback": "flagpack:ae",
	});
}

export default Component;
