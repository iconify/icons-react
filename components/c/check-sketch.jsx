import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zdvk1cdlk.css';
import '../../css/f/f6cn_17np.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="zdvk1cdlk"/><path class="f6cn_17np"/></g>`,
		"fallback": "withicons:check-sketch",
	});
}

export default Component;
