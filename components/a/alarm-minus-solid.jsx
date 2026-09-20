import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0s5tbx4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0s5tbx4g"/>`,
		"fallback": "mynaui:alarm-minus-solid",
	});
}

export default Component;
