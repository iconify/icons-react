import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpx0k4j8g.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpx0k4j8g"/>`,
		"fallback": "f7:cart-fill",
	});
}

export default Component;
