import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ors3-zf-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ors3-zf-c"/>`,
		"fallback": "mynaui:arrow-long-up-solid",
	});
}

export default Component;
