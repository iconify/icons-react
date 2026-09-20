import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yo2675bzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yo2675bzp"/>`,
		"fallback": "simple-icons:bathasu",
	});
}

export default Component;
