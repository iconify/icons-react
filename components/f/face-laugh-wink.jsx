import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lulf7bc2b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lulf7bc2b"/>`,
		"fallback": "fa6-regular:face-laugh-wink",
	});
}

export default Component;
