import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srrc7m5nr.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srrc7m5nr"/>`,
		"fallback": "whh:commentround",
	});
}

export default Component;
