import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdk8ml8uk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdk8ml8uk"/>`,
		"fallback": "stash:burger-classic-light",
	});
}

export default Component;
