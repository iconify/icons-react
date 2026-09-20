import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyujz2g5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyujz2g5k"/>`,
		"fallback": "thesvg-color:contentstack",
	});
}

export default Component;
