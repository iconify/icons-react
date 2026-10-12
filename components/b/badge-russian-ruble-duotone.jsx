import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqj1yfbwj.css';
import '../../css/f/fbyge-9ve.css';
import '../../css/t/ttcrsxcgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fqj1yfbwj"/><path class="fbyge-9ve"/><path class="ttcrsxcgn"/></g>`,
		"fallback": "lucide-extended:badge-russian-ruble-duotone",
	});
}

export default Component;
