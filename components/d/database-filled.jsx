import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0g837mke.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0g837mke"/>`,
		"fallback": "ix:database-filled",
	});
}

export default Component;
