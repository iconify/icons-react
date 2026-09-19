import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7r2ne1tk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r7r2ne1tk"/>`,
		"fallback": "gravity-ui:circle-letter-k",
	});
}

export default Component;
