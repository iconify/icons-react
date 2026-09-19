import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sbieo1jys.css';
import '../../css/p/p7cl2h8tx.css';
import '../../css/j/jsjl7cbxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sbieo1jys"/><path class="p7cl2h8tx"/><path class="jsjl7cbxk"/></g>`,
		"fallback": "hugeicons:haji",
	});
}

export default Component;
