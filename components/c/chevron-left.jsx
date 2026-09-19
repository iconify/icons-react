import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9-_irbuk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9-_irbuk"/>`,
		"fallback": "boxicons:chevron-left",
	});
}

export default Component;
