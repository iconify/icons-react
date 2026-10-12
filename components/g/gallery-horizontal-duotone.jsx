import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i03ibwbly.css';
import '../../css/n/n1sguyb9y.css';
import '../../css/l/l520w2onl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i03ibwbly"/><path class="n1sguyb9y"/><path class="l520w2onl"/></g>`,
		"fallback": "lucide-extended:gallery-horizontal-duotone",
	});
}

export default Component;
