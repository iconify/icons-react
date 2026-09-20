import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvrg0dbrc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvrg0dbrc"/>`,
		"fallback": "radix-icons:chevron-up",
	});
}

export default Component;
