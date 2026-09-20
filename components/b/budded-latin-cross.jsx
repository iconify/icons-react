import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glr4g87vl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glr4g87vl"/>`,
		"fallback": "pinhead:budded-latin-cross",
	});
}

export default Component;
