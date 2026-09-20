import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f-3v2ab3t.css';
import '../../css/w/wdkrmum0i.css';
import '../../css/e/ewmg-bcus.css';
import '../../css/o/omu5u4v-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f-3v2ab3t"/><path class="wdkrmum0i"/><path class="ewmg-bcus"/><path clip-rule="evenodd" class="omu5u4v-d"/></g>`,
		"fallback": "reicon:home-wifi2",
	});
}

export default Component;
