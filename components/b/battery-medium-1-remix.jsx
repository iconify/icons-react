import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o34r5mb9y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o34r5mb9y"/>`,
		"fallback": "streamline:battery-medium-1-remix",
	});
}

export default Component;
