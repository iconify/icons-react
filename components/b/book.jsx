import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t22i2pu7y.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t22i2pu7y"/>`,
		"fallback": "foundation:book",
	});
}

export default Component;
