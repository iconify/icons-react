import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u6-kl2bew.css';
import '../../css/i/i758n4bic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u6-kl2bew"/><path class="i758n4bic"/></g>`,
		"fallback": "reicon:graduation-cap-filled",
	});
}

export default Component;
