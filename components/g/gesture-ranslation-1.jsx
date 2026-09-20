import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3g4u7q3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3g4u7q3x"/>`,
		"fallback": "tdesign:gesture-ranslation-1",
	});
}

export default Component;
