import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkhg5gqnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkhg5gqnp"/>`,
		"fallback": "thesvg-color:humhub",
	});
}

export default Component;
