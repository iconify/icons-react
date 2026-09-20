import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8ni4vjdc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8ni4vjdc"/>`,
		"fallback": "radix-icons:caret-left",
	});
}

export default Component;
