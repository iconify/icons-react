import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sf6u5i5sy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sf6u5i5sy"/>`,
		"fallback": "teenyicons:bottom-left-outline",
	});
}

export default Component;
