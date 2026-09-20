import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxukx6b-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxukx6b-b"/>`,
		"fallback": "reicon:facial-recognition-filled",
	});
}

export default Component;
