import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/th3di3bzb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="th3di3bzb"/>`,
		"fallback": "lsicon:heavy-rain-filled",
	});
}

export default Component;
