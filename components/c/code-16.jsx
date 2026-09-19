import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ukeq0jbjf.css';
import '../../css/e/ezh7gspyc.css';
import '../../css/v/v4e6rhbkp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGe9GAeS4c)" class="ukeq0jbjf"/><defs><linearGradient id="SVGe9GAeS4c" x1="1.647" x2="13.497" y1="2.05" y2="15.098" gradientUnits="userSpaceOnUse"><stop class="ezh7gspyc"/><stop offset="1" class="v4e6rhbkp"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:code-16",
	});
}

export default Component;
