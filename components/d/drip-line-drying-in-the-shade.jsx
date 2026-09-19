import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r5dwkvbfp.css';
import '../../css/n/nwy6zd9aq.css';
import '../../css/m/m2_k9ebuq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r5dwkvbfp"/><path class="nwy6zd9aq"/><path class="m2_k9ebuq"/></g>`,
		"fallback": "ginetex:drip-line-drying-in-the-shade",
	});
}

export default Component;
