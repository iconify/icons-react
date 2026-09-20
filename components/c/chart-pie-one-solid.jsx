import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sx9tpwuxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sx9tpwuxl"/>`,
		"fallback": "mynaui:chart-pie-one-solid",
	});
}

export default Component;
