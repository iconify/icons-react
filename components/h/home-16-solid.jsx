import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvwor_b3c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvwor_b3c"/>`,
		"fallback": "heroicons:home-16-solid",
	});
}

export default Component;
