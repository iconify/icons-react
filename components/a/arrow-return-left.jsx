import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vndlk5bzx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vndlk5bzx"/>`,
		"fallback": "bi:arrow-return-left",
	});
}

export default Component;
