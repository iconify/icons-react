import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac-i-ib1h.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ac-i-ib1h"/>`,
		"fallback": "picon:axe",
	});
}

export default Component;
