import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ym7s1o7nd.css';
import '../../css/c/cgzpch7-k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ym7s1o7nd"/><path class="cgzpch7-k"/>`,
		"fallback": "famicons:bicycle",
	});
}

export default Component;
