import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtm_h7umf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xtm_h7umf"/>`,
		"fallback": "mingcute:game-1-line",
	});
}

export default Component;
