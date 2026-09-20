import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c2dsb_-8a.css';
import '../../css/c/ccmjw11qh.css';
import '../../css/u/ucoa8jbxb.css';
import '../../css/a/alkj6e4kz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="c2dsb_-8a"/><path class="ccmjw11qh"/><path class="ucoa8jbxb"/><path clip-rule="evenodd" class="alkj6e4kz"/></g>`,
		"fallback": "thesvg:302dotai",
	});
}

export default Component;
