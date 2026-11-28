import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mc-l_6bjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mc-l_6bjb"/>`,
		"fallback": "iconaut:arrow-left-to-line-solid",
	});
}

export default Component;
