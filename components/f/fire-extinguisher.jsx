import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6z_85bky.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6z_85bky"/>`,
		"fallback": "pinhead:fire-extinguisher",
	});
}

export default Component;
