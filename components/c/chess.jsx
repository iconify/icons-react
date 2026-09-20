import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xi_rclbgs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xi_rclbgs"/>`,
		"fallback": "material-icon-theme:chess",
	});
}

export default Component;
