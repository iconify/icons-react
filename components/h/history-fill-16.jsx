import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnm2yubav.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnm2yubav"/>`,
		"fallback": "garden:history-fill-16",
	});
}

export default Component;
