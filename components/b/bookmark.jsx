import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0d6fccef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p0d6fccef"/>`,
		"fallback": "gg:bookmark",
	});
}

export default Component;
