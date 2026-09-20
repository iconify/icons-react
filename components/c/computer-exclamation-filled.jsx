import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flrbi8fuu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="flrbi8fuu"/>`,
		"fallback": "lsicon:computer-exclamation-filled",
	});
}

export default Component;
