import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/peuvlzbcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="peuvlzbcf"/>`,
		"fallback": "iconaut:arrow-left-solid",
	});
}

export default Component;
