import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlupp-6qx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlupp-6qx"/>`,
		"fallback": "pinhead:honeycomb",
	});
}

export default Component;
