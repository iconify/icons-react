import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nzuxpsbfq.css';
import '../../css/z/z6f9096ak.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="nzuxpsbfq"/><path class="z6f9096ak"/></g>`,
		"fallback": "cryptocurrency-color:cny",
	});
}

export default Component;
