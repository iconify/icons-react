import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulc_957tn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulc_957tn"/>`,
		"fallback": "radix-icons:counter-clockwise-clock",
	});
}

export default Component;
