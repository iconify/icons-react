import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/el1a2nwhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="el1a2nwhw"/>`,
		"fallback": "reicon:bookmark-2",
	});
}

export default Component;
