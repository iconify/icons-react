import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nf1evzuze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nf1evzuze"/>`,
		"fallback": "stash:arrow-left-light",
	});
}

export default Component;
