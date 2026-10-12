import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eaa77mjma.css';
import '../../css/n/ndoxdcoxt.css';
import '../../css/e/e9wo_3byf.css';
import '../../css/b/blhb6fbmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eaa77mjma"/><path class="ndoxdcoxt"/><path class="e9wo_3byf"/><path class="blhb6fbmq"/></g>`,
		"fallback": "lucide-extended:bell-electric-duotone",
	});
}

export default Component;
