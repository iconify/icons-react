import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/so8-4ab0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="so8-4ab0k"/>`,
		"fallback": "ri:git-repository-private-line",
	});
}

export default Component;
