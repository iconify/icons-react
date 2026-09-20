import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/acou0sbnx.css';
import '../../css/o/ow_6gab-w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="acou0sbnx"/><path clip-rule="evenodd" class="ow_6gab-w"/></g>`,
		"fallback": "streamline-color:blank-notepad-flat",
	});
}

export default Component;
