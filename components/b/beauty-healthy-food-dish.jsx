import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gd6mtdb1u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gd6mtdb1u"/>`,
		"fallback": "streamline-pixel:beauty-healthy-food-dish",
	});
}

export default Component;
