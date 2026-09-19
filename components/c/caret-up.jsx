import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tc-afobgq.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tc-afobgq"/>`,
		"fallback": "fa6-solid:caret-up",
	});
}

export default Component;
