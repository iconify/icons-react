import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4ohkvbho.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4ohkvbho"/>`,
		"fallback": "f7:arrow-right-arrow-left",
	});
}

export default Component;
