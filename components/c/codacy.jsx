import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbyeo8h9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbyeo8h9n"/>`,
		"fallback": "thesvg-color:codacy",
	});
}

export default Component;
