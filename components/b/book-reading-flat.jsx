import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p3j0-6nse.css';
import '../../css/p/prunv4kmb.css';
import '../../css/z/zflji6bre.css';
import '../../css/u/u1685-b6b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p3j0-6nse"/><path class="prunv4kmb"/><path class="zflji6bre"/><path clip-rule="evenodd" class="u1685-b6b"/></g>`,
		"fallback": "streamline-flex-color:book-reading-flat",
	});
}

export default Component;
