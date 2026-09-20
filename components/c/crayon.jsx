import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b75bo8ibf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b75bo8ibf"/>`,
		"fallback": "thesvg-color:crayon",
	});
}

export default Component;
