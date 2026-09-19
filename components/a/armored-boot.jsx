import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/ugo6v-brk.css';
import '../../css/j/jzwmlgdul.css';
import '../../css/f/f1n3zg72f.css';
import '../../css/n/n6yi-hbmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ugo6v-brk"/><path class="jzwmlgdul"/><path class="f1n3zg72f"/><path class="n6yi-hbmg"/></g>`,
		"fallback": "hugeicons:armored-boot",
	});
}

export default Component;
