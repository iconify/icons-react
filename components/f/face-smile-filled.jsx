import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agdg56brh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agdg56brh"/>`,
		"fallback": "griddy-icons:face-smile-filled",
	});
}

export default Component;
