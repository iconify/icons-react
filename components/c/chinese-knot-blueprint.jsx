import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/kgy9pjbzm.css';
import '../../css/i/i930grbpz.css';
import '../../css/q/qa7s7w09v.css';
import '../../css/w/wc2jrzf9o.css';
import '../../css/k/k-g31sewk.css';
import '../../css/v/vr57sgb0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="kgy9pjbzm wm-deco"/><path class="i930grbpz wm-deco"/><path class="qa7s7w09v wm-deco"/><path class="wc2jrzf9o wm-k"/><path class="k-g31sewk wm-a"/><path class="vr57sgb0t wm-k"/></g>`,
		"fallback": "withicons:chinese-knot-blueprint",
	});
}

export default Component;
