import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v271sd3za.css';
import '../../css/r/rx2f-xb4d.css';
import '../../css/o/oe608fbuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v271sd3za"/><path class="rx2f-xb4d"/><path class="oe608fbuw"/></g>`,
		"fallback": "lucide-extended:fan-duotone",
	});
}

export default Component;
