import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bs1a2jbpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bs1a2jbpl"/>`,
		"fallback": "sidekickicons:bluetooth-solid",
	});
}

export default Component;
