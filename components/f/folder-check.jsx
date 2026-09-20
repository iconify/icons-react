import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsnvn8bie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsnvn8bie"/>`,
		"fallback": "mi:folder-check",
	});
}

export default Component;
