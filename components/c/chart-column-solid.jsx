import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu6_zjylq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gu6_zjylq"/>`,
		"fallback": "mynaui:chart-column-solid",
	});
}

export default Component;
