import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wbvw4dxpk.css';
import '../../css/g/g8cmalevy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wbvw4dxpk"/><path class="g8cmalevy"/></g>`,
		"fallback": "streamline-plump-color:gameboy-flat",
	});
}

export default Component;
