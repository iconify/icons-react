import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9_fmcj7v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9_fmcj7v"/>`,
		"fallback": "pinhead:arrow-left-from-tall-rectangle-outline",
	});
}

export default Component;
