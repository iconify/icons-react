import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vfbnlzbak.css';
import '../../css/r/rg7oaeb_d.css';
import '../../css/t/tlufanbfr.css';
import '../../css/l/l-8yn0ulh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vfbnlzbak"/><path class="rg7oaeb_d"/><path class="tlufanbfr"/><path class="l-8yn0ulh"/></g>`,
		"fallback": "lucide-extended:brain-circuit-duotone",
	});
}

export default Component;
