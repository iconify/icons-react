import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rk9ov5cxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rk9ov5cxm"/>`,
		"fallback": "withicons:bat-solid",
	});
}

export default Component;
