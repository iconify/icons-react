import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czrzz41ep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czrzz41ep"/>`,
		"fallback": "reicon:alarm3-filled",
	});
}

export default Component;
