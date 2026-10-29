import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg4u5sbfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xg4u5sbfb"/>`,
		"fallback": "withicons:arrow-down-left-solid",
	});
}

export default Component;
