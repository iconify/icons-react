import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aj3b-5bwo.css';

const viewBox = {"width":24,"height":24,"left":-7,"top":-1};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aj3b-5bwo"/>`,
		"fallback": "jam:glue-f",
	});
}

export default Component;
