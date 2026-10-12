import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l5h6qkb-v.css';
import '../../css/e/ebu5-q53q.css';
import '../../css/a/ai741630p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l5h6qkb-v"/><path class="ebu5-q53q"/><path class="ai741630p"/></g>`,
		"fallback": "lucide-extended:hdmi-port-duotone",
	});
}

export default Component;
