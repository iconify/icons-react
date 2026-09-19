import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p1dsnryse.css';
import '../../css/t/ts9vw2boo.css';
import '../../css/t/toa_kd6jn.css';
import '../../css/i/iwpd1xbdc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p1dsnryse"/><path clip-rule="evenodd" class="ts9vw2boo"/><path clip-rule="evenodd" class="toa_kd6jn"/><path clip-rule="evenodd" class="iwpd1xbdc"/></g>`,
		"fallback": "pepicons:cv",
	});
}

export default Component;
