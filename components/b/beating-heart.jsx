import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdsnylbwc.css';
import '../../css/l/lb80qlbob.css';
import '../../css/k/ko1bcvb2i.css';
import '../../css/c/ct87dwbyc.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdsnylbwc"/><g class="lb80qlbob"><path class="ko1bcvb2i"/><path class="ct87dwbyc"/></g>`,
		"fallback": "openmoji:beating-heart",
	});
}

export default Component;
