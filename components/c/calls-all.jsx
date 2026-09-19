import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uj8ezo3zv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uj8ezo3zv"/>`,
		"fallback": "carbon:calls-all",
	});
}

export default Component;
