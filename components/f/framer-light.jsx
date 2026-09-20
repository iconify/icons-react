import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cm1oe6iah.css';

const viewBox = {"width":256,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cm1oe6iah"/>`,
		"fallback": "thesvg-color:framer-light",
	});
}

export default Component;
