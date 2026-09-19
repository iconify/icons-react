import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jho5y_bjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jho5y_bjk"/>`,
		"fallback": "iconoir:forward-solid",
	});
}

export default Component;
