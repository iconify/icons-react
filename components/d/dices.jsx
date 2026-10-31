import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qflgs-bjq.css';
import '../../css/s/sv2sgccms.css';
import '../../css/e/el9dwsrvm.css';
import '../../css/o/o4kgumbgv.css';
import '../../css/w/wsfopvbjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="qflgs-bjq wm-shadow"/><path class="sv2sgccms wm-shadow"/><path class="el9dwsrvm"/><path class="o4kgumbgv"/><path class="wsfopvbjc"/></g>`,
		"fallback": "withicons-brutal:dices",
	});
}

export default Component;
