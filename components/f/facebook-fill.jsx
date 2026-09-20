import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7x7htp7g.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7x7htp7g"/>`,
		"fallback": "lineicons:facebook-fill",
	});
}

export default Component;
