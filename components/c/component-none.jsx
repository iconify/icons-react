import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/so4b4tb6a.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="so4b4tb6a"/>`,
		"fallback": "radix-icons:component-none",
	});
}

export default Component;
