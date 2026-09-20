import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p3u8ktbtg.css';
import '../../css/k/kljky2b1c.css';
import '../../css/a/apvy-ubch.css';
import '../../css/s/sp21wjdny.css';
import '../../css/f/fe5ke9bnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p3u8ktbtg"/><path class="kljky2b1c"/><path class="apvy-ubch"/><path class="sp21wjdny"/><path class="fe5ke9bnr"/></g>`,
		"fallback": "solar:bot-bold-duotone",
	});
}

export default Component;
