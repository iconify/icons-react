import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kr7eu_21a.css';
import '../../css/j/j4cz7fbph.css';
import '../../css/m/m8almhbma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kr7eu_21a"/><path class="j4cz7fbph"/><path class="m8almhbma"/></g>`,
		"fallback": "lucide-extended:flask-conical-duotone",
	});
}

export default Component;
