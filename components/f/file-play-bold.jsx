import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmcbpk9ji.css';
import '../../css/x/xxwz847qq.css';
import '../../css/w/wm3j448rr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmcbpk9ji"/><path clip-rule="evenodd" class="xxwz847qq"/><path class="wm3j448rr"/>`,
		"fallback": "solar:file-play-bold",
	});
}

export default Component;
