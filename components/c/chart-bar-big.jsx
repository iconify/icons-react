import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vajax-0mf.css';
import '../../css/y/y0rn8rb3v.css';
import '../../css/e/ej6bo1bfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vajax-0mf"/><rect class="y0rn8rb3v"/><rect class="ej6bo1bfx"/></g>`,
		"fallback": "lucide:chart-bar-big",
	});
}

export default Component;
