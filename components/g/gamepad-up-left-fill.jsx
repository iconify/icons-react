import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_uzvwaql.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_uzvwaql"/>`,
		"fallback": "memory:gamepad-up-left-fill",
	});
}

export default Component;
