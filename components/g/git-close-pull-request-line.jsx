import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otv5c1bim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otv5c1bim"/>`,
		"fallback": "ri:git-close-pull-request-line",
	});
}

export default Component;
