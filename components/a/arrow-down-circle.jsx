import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crwfztb9e.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crwfztb9e"/>`,
		"fallback": "f7:arrow-down-circle",
	});
}

export default Component;
