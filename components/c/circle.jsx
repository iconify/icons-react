import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/z88udtbmu.css';
import '../../css/o/omi8og4ui.css';
import '../../css/n/n0rktabcu.css';
import '../../css/w/wtcrh6brh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow z88udtbmu"/><path class="omi8og4ui wm-shadow"/><path class="n0rktabcu"/><path class="wtcrh6brh"/></g>`,
		"fallback": "withicons-brutal:circle",
	});
}

export default Component;
