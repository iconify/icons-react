import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn77hbb3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tn77hbb3k"/>`,
		"fallback": "simple-icons:applepay",
	});
}

export default Component;
