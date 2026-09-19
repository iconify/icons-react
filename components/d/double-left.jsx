import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny2vtvbul.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ny2vtvbul"/>`,
		"fallback": "icons8:double-left",
	});
}

export default Component;
