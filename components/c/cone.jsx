import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0_6e3iib.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o0_6e3iib"/>`,
		"fallback": "picon:cone",
	});
}

export default Component;
