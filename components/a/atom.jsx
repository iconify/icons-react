import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/d7_8r7b7c.css';
import '../../css/m/mcd_p02bq.css';
import '../../css/k/k41b5wbvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="d7_8r7b7c wm-shadow"/><path class="mcd_p02bq wm-shadow"/><path class="k41b5wbvy"/></g>`,
		"fallback": "withicons-brutal:atom",
	});
}

export default Component;
