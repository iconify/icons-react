import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7rvp3y7y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7rvp3y7y"/>`,
		"fallback": "teenyicons:heart-outline",
	});
}

export default Component;
