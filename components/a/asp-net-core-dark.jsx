import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8csb0gic.css';
import '../../css/v/v5hx8jyev.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8csb0gic"/><path class="v5hx8jyev"/>`,
		"fallback": "selfhst:asp-net-core-dark",
	});
}

export default Component;
