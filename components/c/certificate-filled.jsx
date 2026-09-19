import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fckswi25b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fckswi25b"/>`,
		"fallback": "griddy-icons:certificate-filled",
	});
}

export default Component;
