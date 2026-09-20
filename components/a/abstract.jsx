import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mpktzzy9p.css';
import '../../css/t/t7arnacuo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mpktzzy9p"/><path class="t7arnacuo"/></g>`,
		"fallback": "tdesign:abstract",
	});
}

export default Component;
