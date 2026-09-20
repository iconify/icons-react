import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd6en3etl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qd6en3etl"/>`,
		"fallback": "mynaui:components-solid",
	});
}

export default Component;
