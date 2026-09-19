import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5kfwsb7o.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5kfwsb7o"/>`,
		"fallback": "f7:expand",
	});
}

export default Component;
