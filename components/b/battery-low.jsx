import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a27xsi6vn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a27xsi6vn"/>`,
		"fallback": "bxs:battery-low",
	});
}

export default Component;
