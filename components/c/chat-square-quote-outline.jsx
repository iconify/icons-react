import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y3gl9bn5q.css';
import '../../css/z/zs6bp64jw.css';
import '../../css/c/ckuycxbgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="y3gl9bn5q"/><path class="zs6bp64jw"/><path class="ckuycxbgu"/></g>`,
		"fallback": "solar:chat-square-quote-outline",
	});
}

export default Component;
