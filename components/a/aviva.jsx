import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl59vwg3r.css';

const viewBox = {"width":161,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xl59vwg3r"/>`,
		"fallback": "thesvg-color:aviva",
	});
}

export default Component;
