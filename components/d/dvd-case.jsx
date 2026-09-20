import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx7je-blv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tx7je-blv"/>`,
		"fallback": "pinhead:dvd-case",
	});
}

export default Component;
