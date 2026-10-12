import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bjcgm6cpg.css';
import '../../css/f/fo2gyobdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bjcgm6cpg"/><path class="fo2gyobdw"/></g>`,
		"fallback": "lucide-extended:cloud-moon-duotone",
	});
}

export default Component;
