import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlp_1cbhn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qlp_1cbhn"/>`,
		"fallback": "teenyicons:instagram-outline",
	});
}

export default Component;
