import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r541g87yf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r541g87yf"/>`,
		"fallback": "subway:file-3",
	});
}

export default Component;
