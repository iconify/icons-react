import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sm4f9d33i.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sm4f9d33i"/>`,
		"fallback": "memory:gamepad-up",
	});
}

export default Component;
