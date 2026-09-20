import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nc_-zbf5p.css';
import '../../css/y/ylhnziwri.css';
import '../../css/u/u9w229gul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nc_-zbf5p"/><ellipse class="ylhnziwri"/><path class="u9w229gul"/></g>`,
		"fallback": "lucide-lab:candle-tealight",
	});
}

export default Component;
