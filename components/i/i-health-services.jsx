import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vi6278x_x.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vi6278x_x"/>`,
		"fallback": "medical-icon:i-health-services",
	});
}

export default Component;
