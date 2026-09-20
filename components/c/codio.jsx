import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avn5l5gls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avn5l5gls"/>`,
		"fallback": "thesvg-color:codio",
	});
}

export default Component;
