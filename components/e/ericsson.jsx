import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ram9rv0tq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ram9rv0tq"/>`,
		"fallback": "gg:ericsson",
	});
}

export default Component;
