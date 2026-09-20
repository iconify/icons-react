import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9lsbzb7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9lsbzb7q"/>`,
		"fallback": "stash:burger-arrow-left-light",
	});
}

export default Component;
