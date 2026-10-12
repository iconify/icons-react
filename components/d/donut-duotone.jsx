import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wnj3n4b3q.css';
import '../../css/j/jufq728bv.css';
import '../../css/f/f29fwjbso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wnj3n4b3q"/><path class="jufq728bv"/><path class="f29fwjbso"/></g>`,
		"fallback": "lucide-extended:donut-duotone",
	});
}

export default Component;
