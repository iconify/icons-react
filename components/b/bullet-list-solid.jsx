import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m21j3qb8h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m21j3qb8h"/>`,
		"fallback": "streamline:bullet-list-solid",
	});
}

export default Component;
