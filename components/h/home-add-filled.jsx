import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ji8riebbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ji8riebbs"/>`,
		"fallback": "reicon:home-add-filled",
	});
}

export default Component;
