import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8qo6njks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8qo6njks"/>`,
		"fallback": "griddy-icons:component-button-filled",
	});
}

export default Component;
