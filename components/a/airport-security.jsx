import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/znvfvtbpr.css';
import '../../css/e/en74lnbon.css';
import '../../css/u/uwky93byz.css';
import '../../css/b/btol5jbuq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="znvfvtbpr"/><path class="en74lnbon"/><path class="uwky93byz"/><path class="btol5jbuq"/></g>`,
		"fallback": "streamline-color:airport-security",
	});
}

export default Component;
