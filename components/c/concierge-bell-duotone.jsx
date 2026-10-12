import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ai67xildg.css';
import '../../css/t/t_0ei-bue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ai67xildg"/><path class="t_0ei-bue"/></g>`,
		"fallback": "lucide-extended:concierge-bell-duotone",
	});
}

export default Component;
