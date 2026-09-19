import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cm7khe_7e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cm7khe_7e"/>`,
		"fallback": "garden:headset-stroke-16",
	});
}

export default Component;
