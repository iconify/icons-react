import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af1ceacli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="af1ceacli"/>`,
		"fallback": "iconaut:chevron-triple-down-solid",
	});
}

export default Component;
