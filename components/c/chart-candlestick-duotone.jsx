import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/drq9pyb0s.css';
import '../../css/c/cza6ut-na.css';
import '../../css/s/slcgv9bsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="drq9pyb0s"/><path class="cza6ut-na"/><path class="slcgv9bsj"/></g>`,
		"fallback": "lucide-extended:chart-candlestick-duotone",
	});
}

export default Component;
