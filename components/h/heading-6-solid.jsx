import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tosd-wbwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tosd-wbwr"/>`,
		"fallback": "mynaui:heading-6-solid",
	});
}

export default Component;
