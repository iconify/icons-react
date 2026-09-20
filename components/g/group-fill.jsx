import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ro4pgpygn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ro4pgpygn"/>`,
		"fallback": "ri:group-fill",
	});
}

export default Component;
