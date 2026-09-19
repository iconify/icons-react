import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywk2o2cwx.css';

const viewBox = {"width":528,"height":496};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywk2o2cwx"/>`,
		"fallback": "ps:do-not-wash",
	});
}

export default Component;
