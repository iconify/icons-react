import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apa-j2nit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apa-j2nit"/>`,
		"fallback": "noviair:acorn",
	});
}

export default Component;
