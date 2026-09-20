import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rp--imbmm.css';
import '../../css/i/i27ajzovt.css';
import '../../css/r/rh273ybjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rp--imbmm"/><path class="i27ajzovt"/><path class="rh273ybjo"/></g>`,
		"fallback": "streamline-ultimate-color:bin-1",
	});
}

export default Component;
