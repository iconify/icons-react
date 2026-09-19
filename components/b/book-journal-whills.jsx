import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rx_kspbnn.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rx_kspbnn"/>`,
		"fallback": "fa7-solid:book-journal-whills",
	});
}

export default Component;
