import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar9d4uk4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ar9d4uk4f"/>`,
		"fallback": "bx:bxl-nodejs",
	});
}

export default Component;
