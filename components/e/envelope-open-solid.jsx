import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s6-_-bs7n.css';
import '../../css/a/avovtpbhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s6-_-bs7n"/><path class="avovtpbhy"/></g>`,
		"fallback": "flowbite:envelope-open-solid",
	});
}

export default Component;
