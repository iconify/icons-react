import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w36ucgumf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w36ucgumf"/>`,
		"fallback": "uis:arrow-circle-down",
	});
}

export default Component;
