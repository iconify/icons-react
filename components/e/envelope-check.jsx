import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9-5mmp0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9-5mmp0n"/>`,
		"fallback": "uil:envelope-check",
	});
}

export default Component;
