import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jaru5bb1k.css';
import '../../css/v/vp40zol0o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="jaru5bb1k"/><path class="vp40zol0o"/></g>`,
		"fallback": "cryptocurrency-color:hight",
	});
}

export default Component;
