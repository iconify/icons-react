import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j7zsvs46k.css';
import '../../css/a/a5p5igb7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j7zsvs46k"/><path class="a5p5igb7x"/></g>`,
		"fallback": "lets-icons:bag-alt-duotone",
	});
}

export default Component;
