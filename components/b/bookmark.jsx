import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rml5u7k4a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rml5u7k4a"/>`,
		"fallback": "zondicons:bookmark",
	});
}

export default Component;
