import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sx0o_fbse.css';
import '../../css/h/h078bhb2y.css';
import '../../css/n/ny070ob4l.css';
import '../../css/f/fha9r6xzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sx0o_fbse"/><path class="h078bhb2y"/><path class="ny070ob4l"/><path class="fha9r6xzf"/></g>`,
		"fallback": "lucide-extended:chart-radar-duotone",
	});
}

export default Component;
