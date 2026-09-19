import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4n6sib-e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4n6sib-e"/>`,
		"fallback": "carbon:campsite",
	});
}

export default Component;
