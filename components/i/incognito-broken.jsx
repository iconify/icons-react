import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jxmnk027l.css';
import '../../css/g/gjq7b_bis.css';
import '../../css/m/mj-s9sabh.css';
import '../../css/t/tka6adb0f.css';
import '../../css/l/lqrrs8buw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jxmnk027l"/><path class="gjq7b_bis"/><path class="mj-s9sabh"/><path class="tka6adb0f"/><path class="lqrrs8buw"/></g>`,
		"fallback": "solar:incognito-broken",
	});
}

export default Component;
