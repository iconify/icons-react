import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mehailbua.css';
import '../../css/w/wdad5ab4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mehailbua"/><path class="wdad5ab4l"/></g>`,
		"fallback": "andrsrxn:annotations-plus",
	});
}

export default Component;
