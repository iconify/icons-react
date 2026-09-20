import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1r3n6bhi.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1r3n6bhi"/>`,
		"fallback": "pinhead:campsite-on-platform",
	});
}

export default Component;
