import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlvqqvj3n.css';
import '../../css/y/yoqabzmii.css';
import '../../css/u/u99hd5bja.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlvqqvj3n"/><path class="yoqabzmii"/><path class="u99hd5bja"/>`,
		"fallback": "energy-icons:camper-van-20",
	});
}

export default Component;
