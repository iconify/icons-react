import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yi6e-ccrw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yi6e-ccrw"/>`,
		"fallback": "teenyicons:expand-alt-outline",
	});
}

export default Component;
