import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxhb_hb3z.css';
import '../../css/x/x071t2b9k.css';
import '../../css/z/zoy36xbhx.css';

const viewBox = {"width":581.995,"height":263.112};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xxhb_hb3z"><path class="x071t2b9k"/><path class="zoy36xbhx"/></g>`,
		"fallback": "thesvg-color:chick-fil-a",
	});
}

export default Component;
