import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thx0ubc7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="thx0ubc7y"/>`,
		"fallback": "iconoir:book-solid",
	});
}

export default Component;
