import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utzvwf4ku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utzvwf4ku"/>`,
		"fallback": "mynaui:globe-solid",
	});
}

export default Component;
