import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/euo93-5ut.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="euo93-5ut"/>`,
		"fallback": "picon:beer",
	});
}

export default Component;
