import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ug26ubb6t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ug26ubb6t"/>`,
		"fallback": "streamline:gold-remix",
	});
}

export default Component;
