import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjkjlebxe.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjkjlebxe"/>`,
		"fallback": "f7:arrow-up-down-circle",
	});
}

export default Component;
