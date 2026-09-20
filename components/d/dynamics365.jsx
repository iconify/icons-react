import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rd-ht8b1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rd-ht8b1v"/>`,
		"fallback": "simple-icons:dynamics365",
	});
}

export default Component;
