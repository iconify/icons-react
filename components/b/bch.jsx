import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/u-u4r4bor.css';
import '../../css/o/o7dqa5wfq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="u-u4r4bor"/><path class="o7dqa5wfq"/></g>`,
		"fallback": "cryptocurrency-color:bch",
	});
}

export default Component;
