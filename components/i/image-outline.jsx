import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtc0q9bxs.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtc0q9bxs"/>`,
		"fallback": "teenyicons:image-outline",
	});
}

export default Component;
