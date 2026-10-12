import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a9hlsb9oy.css';
import '../../css/g/gir26e-6w.css';
import '../../css/m/mnxnmyx7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="a9hlsb9oy"/><path class="gir26e-6w"/><rect class="mnxnmyx7b"/></g>`,
		"fallback": "andrsrxn:agent",
	});
}

export default Component;
