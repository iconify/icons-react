import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r29ui0i8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r29ui0i8u"/>`,
		"fallback": "reicon:crop2",
	});
}

export default Component;
