import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4hh0wb3i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4hh0wb3i"/>`,
		"fallback": "streamline-pixel:health-drug-medicine",
	});
}

export default Component;
