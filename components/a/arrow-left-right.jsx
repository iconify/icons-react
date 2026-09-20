import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/et0g50bxn.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="et0g50bxn"/>`,
		"fallback": "memory:arrow-left-right",
	});
}

export default Component;
