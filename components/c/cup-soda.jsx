import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/ja_r16b-t.css';
import '../../css/h/hbxhkzysn.css';
import '../../css/z/zit5rebxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ja_r16b-t"/><path class="hbxhkzysn"/><path class="zit5rebxl"/></g>`,
		"fallback": "hugeicons:cup-soda",
	});
}

export default Component;
