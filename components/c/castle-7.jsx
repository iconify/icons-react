import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/anmlihduy.css';
import '../../css/j/jd5857_ex.css';
import '../../css/i/id9lyr7mw.css';
import '../../css/i/i8h9686eq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="anmlihduy"/><path class="jd5857_ex"/><path class="id9lyr7mw"/><path class="i8h9686eq"/></g>`,
		"fallback": "tdesign:castle-7",
	});
}

export default Component;
