import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdz7jqbsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdz7jqbsu"/>`,
		"fallback": "reicon:airplane-square-filled",
	});
}

export default Component;
