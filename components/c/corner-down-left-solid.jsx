import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz5tnpmhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cz5tnpmhr"/>`,
		"fallback": "mynaui:corner-down-left-solid",
	});
}

export default Component;
