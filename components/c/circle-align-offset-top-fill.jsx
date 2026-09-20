import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llvmp7gcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="llvmp7gcz"/>`,
		"fallback": "keyline-icons:circle-align-offset-top-fill",
	});
}

export default Component;
