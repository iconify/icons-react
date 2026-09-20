import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xgu2sucot.css';
import '../../css/w/wmz6rebmz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xgu2sucot"/><path class="wmz6rebmz"/></g>`,
		"fallback": "streamline-color:flower-flat",
	});
}

export default Component;
