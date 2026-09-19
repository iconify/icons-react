import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eg-9_tbhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eg-9_tbhu"/>`,
		"fallback": "griddy-icons:alert-square",
	});
}

export default Component;
