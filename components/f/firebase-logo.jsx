import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/t/t6b7eabyf.css';
import '../../css/j/j0ofopyrz.css';
import '../../css/b/b-p91vbst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="t6b7eabyf"/><path class="j0ofopyrz"/><path class="b-p91vbst"/></g>`,
		"fallback": "streamline-logos:firebase-logo",
	});
}

export default Component;
