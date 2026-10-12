import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tlg1q3--k.css';
import '../../css/f/ftfzq_bzb.css';
import '../../css/g/gb0h6ft2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tlg1q3--k"/><path class="ftfzq_bzb"/><path class="gb0h6ft2d"/></g>`,
		"fallback": "lucide-extended:align-start-horizontal-duotone",
	});
}

export default Component;
