import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z6kqc8bkm.css';
import '../../css/p/p21e9o_cz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z6kqc8bkm"/><path class="p21e9o_cz"/></g>`,
		"fallback": "lucide-extended:chess-rook-duotone",
	});
}

export default Component;
