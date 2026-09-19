import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyznu3b_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyznu3b_y"/>`,
		"fallback": "gg:format-heading",
	});
}

export default Component;
