import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4i1pd5cb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4i1pd5cb"/>`,
		"fallback": "pixel:calender-solid",
	});
}

export default Component;
