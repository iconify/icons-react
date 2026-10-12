import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/go_1u3bfe.css';
import '../../css/d/dau88ab9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="go_1u3bfe"/><path class="dau88ab9d"/></g>`,
		"fallback": "andrsrxn:flag-off",
	});
}

export default Component;
