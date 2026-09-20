import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yuk6gjtnd.css';
import '../../css/r/r8k3w421j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yuk6gjtnd"/><path clip-rule="evenodd" class="r8k3w421j"/></g>`,
		"fallback": "streamline-plump-color:eraser-flat",
	});
}

export default Component;
