import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3qs-bclp.css';

const viewBox = {"width":24,"height":24,"left":-7,"top":-1.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3qs-bclp"/>`,
		"fallback": "jam:glue",
	});
}

export default Component;
