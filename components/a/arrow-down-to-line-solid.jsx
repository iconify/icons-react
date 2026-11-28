import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dahe0tbeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dahe0tbeg"/>`,
		"fallback": "iconaut:arrow-down-to-line-solid",
	});
}

export default Component;
