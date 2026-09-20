import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8x25ojnw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8x25ojnw"/>`,
		"fallback": "teenyicons:c-sharp-outline",
	});
}

export default Component;
