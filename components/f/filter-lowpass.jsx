import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vr8snkabi.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vr8snkabi"/>`,
		"fallback": "fad:filter-lowpass",
	});
}

export default Component;
