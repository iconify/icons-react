import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dxvfbcbii.css';
import '../../css/w/whezlnbmf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dxvfbcbii"/><path class="whezlnbmf"/></g>`,
		"fallback": "bi:buildings",
	});
}

export default Component;
