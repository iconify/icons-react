import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i_wzkdbsw.css';
import '../../css/g/gvfwelbyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="i_wzkdbsw"/><path class="gvfwelbyz"/></g>`,
		"fallback": "hugeicons:flame",
	});
}

export default Component;
