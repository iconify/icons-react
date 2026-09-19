import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gq13s4qpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gq13s4qpl"/>`,
		"fallback": "guidance:do-not-skateboard-rollerboard",
	});
}

export default Component;
