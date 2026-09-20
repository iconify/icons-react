import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bk-w5c0bc.css';
import '../../css/e/e0b6lobqz.css';
import '../../css/z/zkd-pyboe.css';
import '../../css/w/w9fl-49gd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bk-w5c0bc"/><path class="e0b6lobqz"/><path class="zkd-pyboe"/><path class="w9fl-49gd"/></g>`,
		"fallback": "streamline-ultimate-color:checklist",
	});
}

export default Component;
