import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eo0m-bcql.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eo0m-bcql"/>`,
		"fallback": "pinhead:bicycle-in-gabled-building",
	});
}

export default Component;
