import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2jgkrbaa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f2jgkrbaa"/>`,
		"fallback": "gravity-ui:card-heart",
	});
}

export default Component;
