import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9375ab5t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n9375ab5t"/>`,
		"fallback": "streamline:arrow-down-2-solid",
	});
}

export default Component;
