import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qehczibes.css';
import '../../css/w/wull8qusk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qehczibes"/><path class="wull8qusk"/></g>`,
		"fallback": "tdesign:calculation-1",
	});
}

export default Component;
