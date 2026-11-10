import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h-i8f4bhs.css';
import '../../css/v/vecdb67xh.css';
import '../../css/f/fetz4rglw.css';
import '../../css/i/ihhlg4bgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="h-i8f4bhs"/><path class="vecdb67xh"/><path class="fetz4rglw"/><path class="ihhlg4bgm"/></g>`,
		"fallback": "andrsrxn:field-sparkle",
	});
}

export default Component;
