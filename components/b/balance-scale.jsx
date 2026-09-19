import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0qt-cc0g.css';

const viewBox = {"width":2176,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0qt-cc0g"/>`,
		"fallback": "fa:balance-scale",
	});
}

export default Component;
