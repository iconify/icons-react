import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_t2o4b7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_t2o4b7l primary"/>`,
		"fallback": "iconaut:arrow-down-left-duotone",
	});
}

export default Component;
