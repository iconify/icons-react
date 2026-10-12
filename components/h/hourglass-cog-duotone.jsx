import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vwi8pd0fk.css';
import '../../css/n/nu9eyw4up.css';
import '../../css/h/hk5zoibhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vwi8pd0fk"/><path class="nu9eyw4up"/><path class="hk5zoibhi"/></g>`,
		"fallback": "lucide-extended:hourglass-cog-duotone",
	});
}

export default Component;
