import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zt644gbrq.css';
import '../../css/d/dte82obhh.css';
import '../../css/a/a1zyeqbxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zt644gbrq"/><path class="dte82obhh"/><path class="a1zyeqbxh"/></g>`,
		"fallback": "lucide-extended:book-lock-duotone",
	});
}

export default Component;
