import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q48u-cbom.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q48u-cbom"/>`,
		"fallback": "bi:currency-bitcoin",
	});
}

export default Component;
