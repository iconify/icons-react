import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mz9m6ac9p.css';
import '../../css/c/c5syrstgu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="mz9m6ac9p"/><path class="c5syrstgu"/></g>`,
		"fallback": "cryptocurrency-color:chz",
	});
}

export default Component;
