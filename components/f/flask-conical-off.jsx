import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7pk1pbww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7pk1pbww"/>`,
		"fallback": "lucide:flask-conical-off",
	});
}

export default Component;
