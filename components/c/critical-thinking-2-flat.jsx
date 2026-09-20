import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kwvg11bbe.css';
import '../../css/b/bzldxocai.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kwvg11bbe"/><path clip-rule="evenodd" class="bzldxocai"/></g>`,
		"fallback": "streamline-flex-color:critical-thinking-2-flat",
	});
}

export default Component;
