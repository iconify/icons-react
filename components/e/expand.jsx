import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8p3x7bmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8p3x7bmt"/>`,
		"fallback": "proicons:expand",
	});
}

export default Component;
