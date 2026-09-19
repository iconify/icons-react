import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfn-b0b7a.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfn-b0b7a"/>`,
		"fallback": "fa7-brands:cc-mastercard",
	});
}

export default Component;
