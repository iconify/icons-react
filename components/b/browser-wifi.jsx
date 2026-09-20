import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xh_athauz.css';
import '../../css/n/n_wytxb8c.css';
import '../../css/e/eh7nlrbqw.css';
import '../../css/x/x8ji8d7mk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xh_athauz"/><path class="n_wytxb8c"/><path class="eh7nlrbqw"/><path class="x8ji8d7mk"/></g>`,
		"fallback": "streamline-color:browser-wifi",
	});
}

export default Component;
