import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nht6o6bbg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nht6o6bbg"/>`,
		"fallback": "raphael:fork",
	});
}

export default Component;
