import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tp-udmb1k.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tp-udmb1k"/>`,
		"fallback": "f7:battery-25",
	});
}

export default Component;
