import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ro8s8ib8b.css';
import '../../css/t/terfpnntt.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ro8s8ib8b"/><path class="terfpnntt"/>`,
		"fallback": "clarity:employee-line",
	});
}

export default Component;
