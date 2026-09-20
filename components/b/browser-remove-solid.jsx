import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwwnpvb8a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lwwnpvb8a"/>`,
		"fallback": "streamline:browser-remove-solid",
	});
}

export default Component;
