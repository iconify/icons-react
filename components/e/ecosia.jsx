import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwhexrbao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwhexrbao"/>`,
		"fallback": "thesvg-color:ecosia",
	});
}

export default Component;
