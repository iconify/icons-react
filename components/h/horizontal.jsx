import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iff0e9biq.css';

const viewBox = {"width":687,"height":717};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iff0e9biq"/>`,
		"fallback": "ls:horizontal",
	});
}

export default Component;
