import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kh2w1sbmh.css';
import '../../css/v/v-y6h2bzm.css';
import '../../css/i/iz7tihbtz.css';
import '../../css/x/xdkjvi5rk.css';
import '../../css/m/mck06nb_h.css';
import '../../css/m/m43m1jb8z.css';
import '../../css/k/ky38i8bfd.css';
import '../../css/y/yv1uovu2b.css';
import '../../css/y/yru5ocb0i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVG0ViaMdrr" x1="256" x2="256" y1="0" y2="512" gradientUnits="userSpaceOnUse"><stop offset="0" class="kh2w1sbmh"/><stop offset="1" class="v-y6h2bzm"/></linearGradient><path fill="url(#SVG0ViaMdrr)" class="iz7tihbtz"/><path class="xdkjvi5rk"/><path class="mck06nb_h"/><path class="m43m1jb8z"/><path class="ky38i8bfd"/><path class="yv1uovu2b"/><path class="yru5ocb0i"/>`,
		"fallback": "selfhst:black-candy",
	});
}

export default Component;
