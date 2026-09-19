import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cs8yh4q5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cs8yh4q5f"/>`,
		"fallback": "bxl:artstation",
	});
}

export default Component;
