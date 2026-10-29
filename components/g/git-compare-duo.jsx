import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/za8d6-7ga.css';
import '../../css/d/dlev0uh6a.css';
import '../../css/x/x4639o9tv.css';
import '../../css/w/wulhmubft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="za8d6-7ga"/><path class="dlev0uh6a wm-a"/><path class="x4639o9tv"/><path class="wulhmubft"/></g>`,
		"fallback": "withicons:git-compare-duo",
	});
}

export default Component;
