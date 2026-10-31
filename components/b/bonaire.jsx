import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wy7879nbj.css';
import '../../css/k/kp6rhw96h.css';
import '../../css/w/waq7j53kz.css';
import '../../css/v/va2xzgb_k.css';
import '../../css/b/btl0gxbsw.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wy7879nbj"/><path class="kp6rhw96h"/><path class="waq7j53kz"/><path class="va2xzgb_k"/><path class="btl0gxbsw"/>`,
		"fallback": "tabler-flags:bonaire",
	});
}

export default Component;
