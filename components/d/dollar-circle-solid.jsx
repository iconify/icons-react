import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/coo41t5hb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="coo41t5hb"/>`,
		"fallback": "iconaut:dollar-circle-solid",
	});
}

export default Component;
