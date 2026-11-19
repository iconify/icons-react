import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i0m2c7h4d.css';
import '../../css/j/jqgbk1bht.css';
import '../../css/m/mw49tabgd.css';
import '../../css/t/txqs6ybzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="i0m2c7h4d"/><path class="jqgbk1bht"/><path class="mw49tabgd"/><path class="txqs6ybzt"/></g>`,
		"fallback": "andrsrxn:camera-reload",
	});
}

export default Component;
