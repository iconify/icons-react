import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d03a88bzw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d03a88bzw"/>`,
		"fallback": "pinhead:hammer-and-inverted-shoe",
	});
}

export default Component;
