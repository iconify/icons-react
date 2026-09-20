import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhahj9bzw.css';

const viewBox = {"width":1991.3,"height":2143.2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhahj9bzw"/>`,
		"fallback": "thesvg-color:airbnb",
	});
}

export default Component;
