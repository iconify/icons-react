import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/fj4kk9bgl.css';
import '../../css/y/yonu32bng.css';
import '../../css/p/pd8ob3bre.css';
import '../../css/s/shg57gb1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="fj4kk9bgl wm-deco"/><path class="wm-deco yonu32bng"/><path class="pd8ob3bre wm-k"/><path class="shg57gb1y wm-a"/></g>`,
		"fallback": "withicons:boxes-blueprint",
	});
}

export default Component;
