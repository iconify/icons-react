import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gx_x1jbqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gx_x1jbqf"/>`,
		"fallback": "keyline-icons:expand-dashed-down-left-box-fill",
	});
}

export default Component;
