import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlzq5sxjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlzq5sxjo"/>`,
		"fallback": "keyline-icons:chart-pie",
	});
}

export default Component;
