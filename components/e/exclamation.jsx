import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffqs8ektl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffqs8ektl"/>`,
		"fallback": "raphael:exclamation",
	});
}

export default Component;
