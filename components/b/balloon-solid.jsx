import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcb7gsb6t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fcb7gsb6t"/>`,
		"fallback": "streamline:balloon-solid",
	});
}

export default Component;
