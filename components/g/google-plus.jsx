import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ho70dnpkk.css';

const viewBox = {"width":740,"height":840};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ho70dnpkk"/>`,
		"fallback": "il:google-plus",
	});
}

export default Component;
