import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x1kdchbbh.css';
import '../../css/c/cm8p-pbwc.css';
import '../../css/c/cqo-d7c2e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x1kdchbbh"/><path clip-rule="evenodd" class="cm8p-pbwc"/><path class="cqo-d7c2e"/></g>`,
		"fallback": "streamline-color:earth-airplane-flat",
	});
}

export default Component;
