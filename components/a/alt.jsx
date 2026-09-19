import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zluous-2c.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zluous-2c"/>`,
		"fallback": "f7:alt",
	});
}

export default Component;
