import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii6g86ohh.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ii6g86ohh"/>`,
		"fallback": "maki:heart-11",
	});
}

export default Component;
