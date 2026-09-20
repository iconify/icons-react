import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gs3t96b4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gs3t96b4s"/>`,
		"fallback": "mynaui:ar-solid",
	});
}

export default Component;
