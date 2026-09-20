import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jt-7dbckp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jt-7dbckp"/>`,
		"fallback": "thesvg-color:babelio",
	});
}

export default Component;
