import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r860s5b8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r860s5b8z"/>`,
		"fallback": "thesvg:hack-the-box",
	});
}

export default Component;
