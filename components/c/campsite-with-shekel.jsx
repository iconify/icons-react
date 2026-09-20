import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gja2j7b1u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gja2j7b1u"/>`,
		"fallback": "pinhead:campsite-with-shekel",
	});
}

export default Component;
