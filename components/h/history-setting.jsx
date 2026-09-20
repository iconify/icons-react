import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c9b2jjb5u.css';
import '../../css/j/jd501tjny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c9b2jjb5u"/><path class="jd501tjny"/></g>`,
		"fallback": "tdesign:history-setting",
	});
}

export default Component;
