import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6nkr_b1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6nkr_b1i"/>`,
		"fallback": "ci:file-html",
	});
}

export default Component;
