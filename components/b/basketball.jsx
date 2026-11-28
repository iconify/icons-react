import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afp7ldbii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afp7ldbii"/>`,
		"fallback": "noviair-light:basketball",
	});
}

export default Component;
