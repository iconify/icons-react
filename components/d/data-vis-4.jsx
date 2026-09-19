import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sa5x1dblf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sa5x1dblf"/>`,
		"fallback": "carbon:data-vis-4",
	});
}

export default Component;
