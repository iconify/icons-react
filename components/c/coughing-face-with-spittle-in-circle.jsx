import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/la31dzc5o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="la31dzc5o"/>`,
		"fallback": "pinhead:coughing-face-with-spittle-in-circle",
	});
}

export default Component;
