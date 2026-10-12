import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jx2zb2box.css';
import '../../css/o/ow3pahb4h.css';
import '../../css/g/g5_1lqbti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jx2zb2box"/><path class="ow3pahb4h"/><path class="g5_1lqbti"/></g>`,
		"fallback": "lucide-extended:germ-duotone",
	});
}

export default Component;
