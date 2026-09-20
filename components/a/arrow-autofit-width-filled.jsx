import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l21w7pbid.css';
import '../../css/z/zhe6sbcdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l21w7pbid"/><path class="zhe6sbcdb"/></g>`,
		"fallback": "tabler:arrow-autofit-width-filled",
	});
}

export default Component;
