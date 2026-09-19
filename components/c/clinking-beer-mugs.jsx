import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sg2f8hkpu.css';
import '../../css/j/juigwbcmn.css';
import '../../css/v/v2o85f3kl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sg2f8hkpu"/><path class="juigwbcmn"/><path class="v2o85f3kl"/></g>`,
		"fallback": "fluent-emoji-high-contrast:clinking-beer-mugs",
	});
}

export default Component;
