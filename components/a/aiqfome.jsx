import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kosp5ac3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kosp5ac3y"/>`,
		"fallback": "thesvg-color:aiqfome",
	});
}

export default Component;
