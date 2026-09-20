import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pw4_v6bmk.css';
import '../../css/n/ntfhc6rnl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pw4_v6bmk"/><path class="ntfhc6rnl"/>`,
		"fallback": "ooui:function-argument-rtl",
	});
}

export default Component;
