import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-3ycde5f.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-3ycde5f"/>`,
		"fallback": "memory:fill",
	});
}

export default Component;
