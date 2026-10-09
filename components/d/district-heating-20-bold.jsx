import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij_yecsrd.css';
import '../../css/i/ihj0a5_zp.css';
import '../../css/r/r8m749-bj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ij_yecsrd"/><path class="ihj0a5_zp"/><path class="r8m749-bj"/>`,
		"fallback": "energy-icons:district-heating-20-bold",
	});
}

export default Component;
