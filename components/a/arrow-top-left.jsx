import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrq3zdb8t.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrq3zdb8t"/>`,
		"fallback": "radix-icons:arrow-top-left",
	});
}

export default Component;
