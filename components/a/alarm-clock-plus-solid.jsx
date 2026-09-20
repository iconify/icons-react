import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh0succoc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vh0succoc"/>`,
		"fallback": "mynaui:alarm-clock-plus-solid",
	});
}

export default Component;
