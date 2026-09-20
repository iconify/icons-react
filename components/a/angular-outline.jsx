import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5c806b7u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5c806b7u"/>`,
		"fallback": "teenyicons:angular-outline",
	});
}

export default Component;
