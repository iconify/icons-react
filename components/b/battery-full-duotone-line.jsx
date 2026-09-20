import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l9edw2jei.css';
import '../../css/o/o5dy4ebzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l9edw2jei"/><path clip-rule="evenodd" class="o5dy4ebzz"/></g>`,
		"fallback": "lets-icons:battery-full-duotone-line",
	});
}

export default Component;
