import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bq8u6-brl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bq8u6-brl"/>`,
		"fallback": "streamline-block:drink-food-burger",
	});
}

export default Component;
