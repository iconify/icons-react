import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe5k7yzpc.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fe5k7yzpc"/>`,
		"fallback": "fa7-regular:grin-tears",
	});
}

export default Component;
