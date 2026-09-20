import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ruef20b1a.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ruef20b1a"/>`,
		"fallback": "lineicons:arrow-right",
	});
}

export default Component;
