import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fblthabqz.css';
import '../../css/z/zxytat0ez.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fblthabqz"/><path class="zxytat0ez"/></g>`,
		"fallback": "streamline-color:composition-oval",
	});
}

export default Component;
