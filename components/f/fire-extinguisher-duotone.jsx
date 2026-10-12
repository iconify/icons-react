import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/phqcj38vj.css';
import '../../css/r/r1rsxnb4u.css';
import '../../css/u/u5ok6zbnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="phqcj38vj"/><path class="r1rsxnb4u"/><path class="u5ok6zbnf"/></g>`,
		"fallback": "lucide-extended:fire-extinguisher-duotone",
	});
}

export default Component;
