import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/ttg5rcbmz.css';
import '../../css/c/cen0gcb9k.css';
import '../../css/i/ijwgybuji.css';
import '../../css/j/j5-ljmbzq.css';
import '../../css/p/pti-lj84z.css';
import '../../css/k/kx3zikbiq.css';
import '../../css/s/s7hum9b6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ttg5rcbmz wm-shadow"/><path class="cen0gcb9k"/><path class="ijwgybuji"/><path class="j5-ljmbzq"/><path class="pti-lj84z"/><path class="kx3zikbiq"/><path class="s7hum9b6t"/></g>`,
		"fallback": "withicons-brutal:avatar-person",
	});
}

export default Component;
