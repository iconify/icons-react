import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/s/s8xatbbmo.css';
import '../../css/u/u72b7ubwf.css';
import '../../css/l/lu3nhub8p.css';
import '../../css/y/y7d1zh-yb.css';
import '../../css/k/kycvqob3r.css';
import '../../css/f/fyncz8bga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="s8xatbbmo wm-shadow"/><path class="u72b7ubwf"/><path class="lu3nhub8p"/><path class="y7d1zh-yb"/><path class="kycvqob3r wm-shine"/><path class="fyncz8bga wm-deco"/></g>`,
		"fallback": "withicons-sticker:bone",
	});
}

export default Component;
