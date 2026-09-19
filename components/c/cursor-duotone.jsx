import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mr8hlubsf.css';
import '../../css/x/xqggy0yze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mr8hlubsf"/><path class="xqggy0yze"/></g>`,
		"fallback": "iconamoon:cursor-duotone",
	});
}

export default Component;
