import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u67prxy3f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u67prxy3f"/>`,
		"fallback": "lsicon:basket-outline",
	});
}

export default Component;
