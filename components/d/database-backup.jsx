import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g549aub-r.css';
import '../../css/m/mipxudk3z.css';
import '../../css/g/gtrou0bvy.css';
import '../../css/y/y5ske3qnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><ellipse class="g549aub-r"/><path class="mipxudk3z"/><path class="gtrou0bvy"/><path class="y5ske3qnv"/></g>`,
		"fallback": "hugeicons:database-backup",
	});
}

export default Component;
