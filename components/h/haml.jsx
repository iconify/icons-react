import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/quqxhm_8m.css';

const viewBox = {"width":396,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="quqxhm_8m"/>`,
		"fallback": "file-icons:haml",
	});
}

export default Component;
