import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/heyq2bc2u.css';
import '../../css/m/mrda_3qxu.css';
import '../../css/h/hjjceedbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="heyq2bc2u"/><path class="mrda_3qxu"/><path class="hjjceedbl"/></g>`,
		"fallback": "hugeicons:film-roll-02",
	});
}

export default Component;
