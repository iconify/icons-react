import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsqy12cmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsqy12cmm"/>`,
		"fallback": "thesvg:cbc",
	});
}

export default Component;
