import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofr0nkb9p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ofr0nkb9p"/>`,
		"fallback": "streamline:glasses-solid",
	});
}

export default Component;
