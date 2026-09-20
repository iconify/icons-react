import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha54we7vy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ha54we7vy"/>`,
		"fallback": "pinhead:beaver-in-water",
	});
}

export default Component;
