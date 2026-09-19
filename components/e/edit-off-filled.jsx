import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewb4zlb-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewb4zlb-s"/>`,
		"fallback": "griddy-icons:edit-off-filled",
	});
}

export default Component;
