import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/hne11ibsr.css';
import '../../css/l/lb8hj9bbj.css';
import '../../css/m/mz8gxwbqy.css';
import '../../css/v/vku-jgsjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="hne11ibsr wm-shadow"/><path class="lb8hj9bbj wm-shadow"/><path class="mz8gxwbqy"/><path class="vku-jgsjx"/></g>`,
		"fallback": "withicons-brutal:axe",
	});
}

export default Component;
