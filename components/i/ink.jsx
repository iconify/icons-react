import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qm6f85b3i.css';
import '../../css/v/v2-ll8zod.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="qm6f85b3i"/><path class="v2-ll8zod"/></g>`,
		"fallback": "cryptocurrency-color:ink",
	});
}

export default Component;
