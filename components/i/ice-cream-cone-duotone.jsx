import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lagwj0bdl.css';
import '../../css/e/er6snfb-s.css';
import '../../css/o/o5g176b6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lagwj0bdl"/><path class="er6snfb-s"/><path class="o5g176b6d"/></g>`,
		"fallback": "lucide-extended:ice-cream-cone-duotone",
	});
}

export default Component;
