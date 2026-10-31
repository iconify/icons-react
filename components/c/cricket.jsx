import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/djcptqjeb.css';
import '../../css/e/e4plmcchm.css';
import '../../css/q/qfj8c7p0l.css';
import '../../css/t/te5yllspu.css';
import '../../css/h/hhcwm8b1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="djcptqjeb wm-shadow"/><path class="e4plmcchm wm-shadow"/><path class="qfj8c7p0l"/><path class="te5yllspu"/><path class="hhcwm8b1q"/></g>`,
		"fallback": "withicons-brutal:cricket",
	});
}

export default Component;
