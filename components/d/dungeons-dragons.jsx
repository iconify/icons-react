import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yc8pr7bkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yc8pr7bkk"/>`,
		"fallback": "thesvg-color:dungeons-dragons",
	});
}

export default Component;
