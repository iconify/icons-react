import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w43g67bht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w43g67bht"/>`,
		"fallback": "thesvg-color:coppel",
	});
}

export default Component;
