import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9jtd3mcc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9jtd3mcc"/>`,
		"fallback": "bi:file-earmark-minus-fill",
	});
}

export default Component;
