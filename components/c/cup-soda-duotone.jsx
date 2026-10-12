import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mwl-pp3xj.css';
import '../../css/i/i-xddriwr.css';
import '../../css/b/btakn4b3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mwl-pp3xj"/><path class="i-xddriwr"/><path class="btakn4b3x"/></g>`,
		"fallback": "lucide-extended:cup-soda-duotone",
	});
}

export default Component;
