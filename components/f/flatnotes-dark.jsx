import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6dpq6bos.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6dpq6bos"/>`,
		"fallback": "selfhst:flatnotes-dark",
	});
}

export default Component;
