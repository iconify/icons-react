import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xj-kuedpj.css';
import '../../css/b/brlk4pa2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xj-kuedpj"/><path class="brlk4pa2b"/></g>`,
		"fallback": "lucide-extended:gavel-duotone",
	});
}

export default Component;
