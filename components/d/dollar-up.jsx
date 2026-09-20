import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ie50nzixu.css';
import '../../css/t/tfaubabtq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ie50nzixu"/><path class="tfaubabtq"/></g>`,
		"fallback": "reicon:dollar-up",
	});
}

export default Component;
