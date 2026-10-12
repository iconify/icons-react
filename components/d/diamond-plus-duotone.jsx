import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ygv4c4bdn.css';
import '../../css/n/nw4f7abft.css';
import '../../css/a/ai741630p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ygv4c4bdn"/><path class="nw4f7abft"/><path class="ai741630p"/></g>`,
		"fallback": "lucide-extended:diamond-plus-duotone",
	});
}

export default Component;
