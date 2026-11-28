import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxi3_5bil.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxi3_5bil"/>`,
		"fallback": "pullo:bow-and-arrow-thin",
	});
}

export default Component;
