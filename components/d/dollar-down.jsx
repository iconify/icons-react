import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f46mr-fii.css';
import '../../css/i/ie50nzixu.css';
import '../../css/m/mow89gbsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f46mr-fii"/><path class="ie50nzixu"/><path class="mow89gbsr"/></g>`,
		"fallback": "reicon:dollar-down",
	});
}

export default Component;
