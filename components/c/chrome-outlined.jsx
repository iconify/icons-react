import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptc2ntoas.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptc2ntoas"/>`,
		"fallback": "ant-design:chrome-outlined",
	});
}

export default Component;
