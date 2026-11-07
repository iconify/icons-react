import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ch5jc2bad.css';
import '../../css/r/rjuy8dl9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ch5jc2bad"/><path class="rjuy8dl9o"/>`,
		"fallback": "solar:close-bold-duotone",
	});
}

export default Component;
