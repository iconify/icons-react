import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hf5yhlbua.css';
import '../../css/e/eu2bpjbbr.css';
import '../../css/z/zkic90lmy.css';
import '../../css/y/ygwioac4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hf5yhlbua wm-k"/><path class="eu2bpjbbr wm-deco"/><path class="wm-k zkic90lmy"/><path class="wm-shadow ygwioac4r"/></g>`,
		"fallback": "withicons-valentine:euro",
	});
}

export default Component;
