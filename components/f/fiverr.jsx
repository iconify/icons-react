import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzf1cfrqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzf1cfrqv"/>`,
		"fallback": "thesvg-color:fiverr",
	});
}

export default Component;
