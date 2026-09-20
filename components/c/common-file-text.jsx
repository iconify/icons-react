import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/admxylbii.css';
import '../../css/o/oimlrb-gz.css';
import '../../css/n/ni758ub7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="admxylbii"/><path class="oimlrb-gz"/><path class="ni758ub7d"/></g>`,
		"fallback": "streamline-ultimate-color:common-file-text",
	});
}

export default Component;
