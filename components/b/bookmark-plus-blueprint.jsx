import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/siy926dmk.css';
import '../../css/m/mee3dzblk.css';
import '../../css/p/peu007b-y.css';
import '../../css/t/t_wo4ibie.css';
import '../../css/i/ias_7wphn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="siy926dmk wm-deco"/><path class="mee3dzblk wm-deco"/><path class="peu007b-y wm-k"/><path class="t_wo4ibie wm-a"/><path class="ias_7wphn wm-k"/></g>`,
		"fallback": "withicons:bookmark-plus-blueprint",
	});
}

export default Component;
