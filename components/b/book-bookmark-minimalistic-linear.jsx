import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c6-bipb9j.css';
import '../../css/r/rkviku0vk.css';
import '../../css/d/dec7f_bty.css';
import '../../css/l/lyw4o5ucl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c6-bipb9j"/><path class="rkviku0vk"/><path class="dec7f_bty"/><path class="lyw4o5ucl"/></g>`,
		"fallback": "solar:book-bookmark-minimalistic-linear",
	});
}

export default Component;
