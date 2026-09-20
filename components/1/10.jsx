import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfqv7u9dt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfqv7u9dt"/>`,
		"fallback": "lets-icons:10",
	});
}

export default Component;
