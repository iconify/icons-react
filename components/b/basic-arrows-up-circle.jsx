import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-be73b0e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m-be73b0e"/>`,
		"fallback": "streamline-block:basic-arrows-up-circle",
	});
}

export default Component;
