import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tici9vb6k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tici9vb6k"/>`,
		"fallback": "carbon:energy-waste",
	});
}

export default Component;
