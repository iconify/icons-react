import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzdy5vbln.css';
import '../../css/g/g483dpl3h.css';
import '../../css/f/fzumlcbut.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzdy5vbln"/><path class="g483dpl3h"/><path class="fzumlcbut"/>`,
		"fallback": "energy-icons:ferris-wheel-20",
	});
}

export default Component;
