import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z72g4ybii.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z72g4ybii"/>`,
		"fallback": "ix:arrow-up-left",
	});
}

export default Component;
