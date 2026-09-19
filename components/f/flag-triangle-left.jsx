import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fm938veot.css';
import '../../css/n/njfofebaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="fm938veot"/><path class="njfofebaf"/></g>`,
		"fallback": "hugeicons:flag-triangle-left",
	});
}

export default Component;
