import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/ztkp9ub7o.css';
import '../../css/f/fj4ytpy1i.css';
import '../../css/k/kxzzrfb2l.css';
import '../../css/n/n61bilb_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ztkp9ub7o"/><path class="fj4ytpy1i"/><path class="kxzzrfb2l"/><path class="n61bilb_v"/></g>`,
		"fallback": "streamline-cyber-color:gentleman",
	});
}

export default Component;
