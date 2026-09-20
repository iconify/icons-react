import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8uxgbcvw.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8uxgbcvw"/>`,
		"fallback": "memory:arrow-top-right",
	});
}

export default Component;
