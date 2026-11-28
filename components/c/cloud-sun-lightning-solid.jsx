import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yis2penob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yis2penob"/>`,
		"fallback": "iconaut:cloud-sun-lightning-solid",
	});
}

export default Component;
