import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/e/e98791bqv.css';
import '../../css/n/nay7nddul.css';
import '../../css/z/zsv6gzbnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="pw8f5c0fp"/><path class="e98791bqv"/><path class="nay7nddul"/><path class="zsv6gzbnj"/></g>`,
		"fallback": "solar:chat-square-2-linear",
	});
}

export default Component;
