import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jhpso8b8b.css';
import '../../css/n/np1e_hbeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jhpso8b8b"/><circle transform="matrix(-1 0 0 1 8 3)" class="np1e_hbeg"/></g>`,
		"fallback": "hugeicons:bounce-left",
	});
}

export default Component;
