import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wn1cvkbsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wn1cvkbsu"/>`,
		"fallback": "thesvg:better-stack",
	});
}

export default Component;
