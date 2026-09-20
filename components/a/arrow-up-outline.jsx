import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3eoodb_u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3eoodb_u"/>`,
		"fallback": "teenyicons:arrow-up-outline",
	});
}

export default Component;
