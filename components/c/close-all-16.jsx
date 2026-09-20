import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2wsobc9f.css';
import '../../css/x/xfpzin9xv.css';
import '../../css/w/w8mm_0b1l.css';
import '../../css/e/ebmubxb3x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2wsobc9f"/><path clip-rule="evenodd" class="xfpzin9xv"/><path class="w8mm_0b1l"/><path class="ebmubxb3x"/>`,
		"fallback": "qlementine-icons:close-all-16",
	});
}

export default Component;
