import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zppi94bhp.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zppi94bhp"/>`,
		"fallback": "f7:heart-slash-fill",
	});
}

export default Component;
