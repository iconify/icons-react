import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re1y-rbgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re1y-rbgv"/>`,
		"fallback": "iconaut:butterfly-solid",
	});
}

export default Component;
