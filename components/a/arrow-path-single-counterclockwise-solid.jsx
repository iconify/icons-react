import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3hdh9k9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g3hdh9k9v"/>`,
		"fallback": "sidekickicons:arrow-path-single-counterclockwise-solid",
	});
}

export default Component;
