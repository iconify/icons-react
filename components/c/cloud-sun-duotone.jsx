import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b87vetjhc.css';
import '../../css/b/bjcgm6cpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b87vetjhc"/><path class="bjcgm6cpg"/></g>`,
		"fallback": "lucide-extended:cloud-sun-duotone",
	});
}

export default Component;
