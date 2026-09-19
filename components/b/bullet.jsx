import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtxu6e6hc.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtxu6e6hc"/>`,
		"fallback": "whh:bullet",
	});
}

export default Component;
