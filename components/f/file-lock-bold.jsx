import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rq-7flbbr.css';
import '../../css/b/b0bcc0c-v.css';
import '../../css/z/z5kr1gbqy.css';
import '../../css/w/wm3j448rr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rq-7flbbr"/><path class="b0bcc0c-v"/><path clip-rule="evenodd" class="z5kr1gbqy"/><path class="wm3j448rr"/>`,
		"fallback": "solar:file-lock-bold",
	});
}

export default Component;
