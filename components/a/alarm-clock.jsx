import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/n9_hsyb7y.css';
import '../../css/q/qpe0g6bpw.css';
import '../../css/y/yyuxwrost.css';
import '../../css/a/a2lggtgcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="n9_hsyb7y wm-shadow"/><path class="qpe0g6bpw wm-shadow"/><path class="yyuxwrost"/><path class="a2lggtgcv"/></g>`,
		"fallback": "withicons-brutal:alarm-clock",
	});
}

export default Component;
