import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgbut2b0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgbut2b0g"/>`,
		"fallback": "mdi:git-repository",
	});
}

export default Component;
