import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n9plpzk-a.css';
import '../../css/n/nimxhubxl.css';
import '../../css/j/j9vo68s_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="n9plpzk-a"/><path class="nimxhubxl"/><path class="j9vo68s_w"/></g>`,
		"fallback": "iconaut:flag-off",
	});
}

export default Component;
