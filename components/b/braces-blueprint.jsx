import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/p56rhtbce.css';
import '../../css/b/bxjv56brc.css';
import '../../css/a/awy7zdblf.css';
import '../../css/b/b_239qmsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="p56rhtbce wm-deco"/><path class="bxjv56brc wm-deco"/><path class="awy7zdblf"/><path class="b_239qmsy"/></g>`,
		"fallback": "withicons:braces-blueprint",
	});
}

export default Component;
