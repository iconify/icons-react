import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6921x8_u.css';
import '../../css/u/ux7ps9bfj.css';
import '../../css/w/w8iddeb0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a6921x8_u"/><path class="ux7ps9bfj"/><path class="w8iddeb0d"/></g>`,
		"fallback": "andrsrxn:apple-core",
	});
}

export default Component;
