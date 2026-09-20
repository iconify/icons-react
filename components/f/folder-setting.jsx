import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pucj1jzhj.css';
import '../../css/p/p9rflmbbg.css';
import '../../css/x/x6_8z9bpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pucj1jzhj"/><path class="p9rflmbbg"/><path class="x6_8z9bpa"/></g>`,
		"fallback": "tdesign:folder-setting",
	});
}

export default Component;
