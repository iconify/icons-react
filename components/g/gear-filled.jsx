import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tv-robcde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tv-robcde"/>`,
		"fallback": "reicon:gear-filled",
	});
}

export default Component;
