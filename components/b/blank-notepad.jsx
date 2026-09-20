import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kk2pmvbyt.css';
import '../../css/p/p2_kz_dot.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kk2pmvbyt"/><path class="p2_kz_dot"/></g>`,
		"fallback": "streamline-color:blank-notepad",
	});
}

export default Component;
