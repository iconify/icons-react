import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odjdrzbcz.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odjdrzbcz"/>`,
		"fallback": "f7:exclamationmark-bubble",
	});
}

export default Component;
