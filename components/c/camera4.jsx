import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fp6zikbhq.css';
import '../../css/t/tyll-4bpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fp6zikbhq"/><path class="tyll-4bpv"/></g>`,
		"fallback": "reicon:camera4",
	});
}

export default Component;
