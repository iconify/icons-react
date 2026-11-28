import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohwqlgm2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohwqlgm2o"/>`,
		"fallback": "iconaut:bone-fractured-solid",
	});
}

export default Component;
