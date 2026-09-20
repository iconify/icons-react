import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w8enqgb6g.css';
import '../../css/r/rm0lvsbgg.css';
import '../../css/z/zrdmtrb2f.css';
import '../../css/u/uxgp4abzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w8enqgb6g"/><path class="rm0lvsbgg"/><path class="zrdmtrb2f"/><path class="uxgp4abzv"/></g>`,
		"fallback": "streamline-ultimate-color:apple-logo",
	});
}

export default Component;
