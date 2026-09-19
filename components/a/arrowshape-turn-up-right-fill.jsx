import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_bfxb-og.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_bfxb-og"/>`,
		"fallback": "f7:arrowshape-turn-up-right-fill",
	});
}

export default Component;
