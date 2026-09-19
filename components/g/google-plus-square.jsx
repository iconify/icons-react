import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1w7dacyg.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1w7dacyg"/>`,
		"fallback": "fa-brands:google-plus-square",
	});
}

export default Component;
