import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/em0hcp2gj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="em0hcp2gj"/>`,
		"fallback": "stash:gif-solid",
	});
}

export default Component;
