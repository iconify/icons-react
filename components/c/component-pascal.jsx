import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia0lysvrw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ia0lysvrw"/>`,
		"fallback": "file-icons:component-pascal",
	});
}

export default Component;
