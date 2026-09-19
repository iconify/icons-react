import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x27_uqb0e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x27_uqb0e"/>`,
		"fallback": "dashicons:format-gallery",
	});
}

export default Component;
