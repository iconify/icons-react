import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o_ktexcbd.css';
import '../../css/m/m0cikccuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o_ktexcbd"/><path class="m0cikccuw"/></g>`,
		"fallback": "coolicons:bear-bulk-round",
	});
}

export default Component;
