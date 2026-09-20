import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6q0xsb3n.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6q0xsb3n"/>`,
		"fallback": "teenyicons:bookmark-solid",
	});
}

export default Component;
