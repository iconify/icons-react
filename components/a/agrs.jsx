import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nc-z6cbpx.css';
import '../../css/r/rmv9yblnu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="nc-z6cbpx"/><path class="rmv9yblnu"/></g>`,
		"fallback": "cryptocurrency-color:agrs",
	});
}

export default Component;
