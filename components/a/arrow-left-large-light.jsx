import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d49rtyo5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d49rtyo5x"/>`,
		"fallback": "stash:arrow-left-large-light",
	});
}

export default Component;
