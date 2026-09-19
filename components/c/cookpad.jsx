import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6mz-dumd.css';

const viewBox = {"width":717,"height":717};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6mz-dumd"/>`,
		"fallback": "ls:cookpad",
	});
}

export default Component;
