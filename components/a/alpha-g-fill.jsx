import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxcgr-bcz.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxcgr-bcz"/>`,
		"fallback": "memory:alpha-g-fill",
	});
}

export default Component;
