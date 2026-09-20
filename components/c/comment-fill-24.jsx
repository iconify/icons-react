import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xakau2eez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xakau2eez"/>`,
		"fallback": "octicon:comment-fill-24",
	});
}

export default Component;
