import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2yu1ib7l.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2yu1ib7l"/>`,
		"fallback": "memory:alert-rhombus",
	});
}

export default Component;
