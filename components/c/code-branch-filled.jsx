import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kio_w0bfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kio_w0bfc"/>`,
		"fallback": "griddy-icons:code-branch-filled",
	});
}

export default Component;
