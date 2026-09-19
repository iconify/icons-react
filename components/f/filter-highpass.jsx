import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f62sy9bfc.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f62sy9bfc"/>`,
		"fallback": "fad:filter-highpass",
	});
}

export default Component;
