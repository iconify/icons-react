import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c725z4k7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c725z4k7w"/>`,
		"fallback": "iconaut:corner-left-up-solid",
	});
}

export default Component;
