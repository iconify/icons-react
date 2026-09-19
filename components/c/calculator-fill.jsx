import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u34u9o27z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u34u9o27z"/>`,
		"fallback": "bi:calculator-fill",
	});
}

export default Component;
