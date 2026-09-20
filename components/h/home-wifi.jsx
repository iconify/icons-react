import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f-3v2ab3t.css';
import '../../css/l/lkf3u0e1e.css';
import '../../css/e/ewmg-bcus.css';
import '../../css/a/ad8mu8bes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f-3v2ab3t"/><path class="lkf3u0e1e"/><path class="ewmg-bcus"/><path clip-rule="evenodd" class="ad8mu8bes"/></g>`,
		"fallback": "reicon:home-wifi",
	});
}

export default Component;
