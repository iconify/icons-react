import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ks-jpshjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ks-jpshjo"/>`,
		"fallback": "iconaut:circle-number-7-solid",
	});
}

export default Component;
