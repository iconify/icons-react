import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rot8tbcdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rot8tbcdd"/>`,
		"fallback": "mono-icons:circle-remove",
	});
}

export default Component;
