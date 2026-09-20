import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/empx9xa-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="empx9xa-x"/>`,
		"fallback": "weui:add-filled",
	});
}

export default Component;
