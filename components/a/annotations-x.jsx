import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ythrwkb6p.css';
import '../../css/y/y50vocdrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ythrwkb6p"/><path class="y50vocdrj"/></g>`,
		"fallback": "andrsrxn:annotations-x",
	});
}

export default Component;
