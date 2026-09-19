import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dy2302llc.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dy2302llc"/>`,
		"fallback": "whh:barchart",
	});
}

export default Component;
