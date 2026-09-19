import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcaj8rqjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcaj8rqjx"/>`,
		"fallback": "grommet-icons:compass",
	});
}

export default Component;
