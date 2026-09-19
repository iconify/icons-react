import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xv702vb6x.css';
import '../../css/i/i6v7rebjf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="xv702vb6x"/><path class="i6v7rebjf"/></g>`,
		"fallback": "cryptocurrency-color:hsr",
	});
}

export default Component;
