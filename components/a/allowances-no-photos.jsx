import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xy9_0_s7p.css';
import '../../css/b/bjpwzelre.css';
import '../../css/h/hz0a29hus.css';
import '../../css/p/pk65k-bjr.css';
import '../../css/p/pfbq9286y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xy9_0_s7p"/><path class="bjpwzelre"/><path class="hz0a29hus"/><path class="pk65k-bjr"/><path class="pfbq9286y"/></g>`,
		"fallback": "streamline-ultimate-color:allowances-no-photos",
	});
}

export default Component;
