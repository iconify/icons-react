import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/th6h_28ds.css';

const viewBox = {"width":1025,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="th6h_28ds"/>`,
		"fallback": "whh:equals",
	});
}

export default Component;
