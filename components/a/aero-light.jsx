import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1x60zbjh.css';

const viewBox = {"width":55,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i1x60zbjh"/>`,
		"fallback": "thesvg-color:aero-light",
	});
}

export default Component;
