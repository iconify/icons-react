import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3jsx340p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3jsx340p"/>`,
		"fallback": "iconaut:bar-chart-solid",
	});
}

export default Component;
