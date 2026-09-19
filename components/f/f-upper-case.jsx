import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg7rfy0vv.css';

const viewBox = {"width":769,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg7rfy0vv"/>`,
		"fallback": "whh:f-upper-case",
	});
}

export default Component;
