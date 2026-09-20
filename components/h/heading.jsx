import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jia3v4fcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jia3v4fcr"/>`,
		"fallback": "sidekickicons:heading",
	});
}

export default Component;
