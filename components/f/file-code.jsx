import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ph0uw5mzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ph0uw5mzn"/>`,
		"fallback": "ci:file-code",
	});
}

export default Component;
