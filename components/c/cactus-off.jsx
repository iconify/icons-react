import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnj__0ttb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnj__0ttb"/>`,
		"fallback": "tabler:cactus-off",
	});
}

export default Component;
