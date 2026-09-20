import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gb2g502qc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gb2g502qc"/>`,
		"fallback": "mynaui:arrow-big-right-solid",
	});
}

export default Component;
