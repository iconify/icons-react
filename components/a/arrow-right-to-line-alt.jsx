import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sx714ckou.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sx714ckou"/>`,
		"fallback": "f7:arrow-right-to-line-alt",
	});
}

export default Component;
