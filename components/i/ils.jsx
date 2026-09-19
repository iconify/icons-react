import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulrfz11jl.css';

const viewBox = {"width":1376,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulrfz11jl"/>`,
		"fallback": "fa:ils",
	});
}

export default Component;
