import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6_yl3b8x.css';
import '../../css/e/e8w1e_bsp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6_yl3b8x"/><path class="e8w1e_bsp"/>`,
		"fallback": "basil:envelope-open-solid",
	});
}

export default Component;
