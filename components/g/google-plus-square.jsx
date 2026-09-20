import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/teuv0761g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="teuv0761g"/>`,
		"fallback": "la:google-plus-square",
	});
}

export default Component;
