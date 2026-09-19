import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-w-e-bse.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-w-e-bse"/>`,
		"fallback": "fluent-mdl2:crop",
	});
}

export default Component;
