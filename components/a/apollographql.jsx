import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxqueebcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxqueebcj"/>`,
		"fallback": "simple-icons:apollographql",
	});
}

export default Component;
