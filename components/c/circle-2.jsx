import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyha-1b1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyha-1b1y"/>`,
		"fallback": "noviair:circle-2",
	});
}

export default Component;
