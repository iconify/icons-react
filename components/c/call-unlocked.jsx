import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/da4g6hbex.css';
import '../../css/h/hsj063b4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="da4g6hbex"/><path class="hsj063b4j"/></g>`,
		"fallback": "hugeicons:call-unlocked",
	});
}

export default Component;
