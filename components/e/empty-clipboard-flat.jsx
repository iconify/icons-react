import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/geeojbb_h.css';
import '../../css/l/l5ivxnb8s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="geeojbb_h"/><path class="l5ivxnb8s"/></g>`,
		"fallback": "streamline-flex-color:empty-clipboard-flat",
	});
}

export default Component;
