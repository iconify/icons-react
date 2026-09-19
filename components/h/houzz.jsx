import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8yhhqb2h.css';

const viewBox = {"width":577.176,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8yhhqb2h"/>`,
		"fallback": "brandico:houzz",
	});
}

export default Component;
