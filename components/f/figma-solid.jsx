import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wiku2ln1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wiku2ln1k"/>`,
		"fallback": "iconaut:figma-solid",
	});
}

export default Component;
