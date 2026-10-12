import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sqb_ttb0h.css';
import '../../css/b/bx5la-bud.css';
import '../../css/q/q5ceqyhfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sqb_ttb0h"/><path class="bx5la-bud"/><path class="q5ceqyhfs"/></g>`,
		"fallback": "lucide-extended:highlighter-duotone",
	});
}

export default Component;
