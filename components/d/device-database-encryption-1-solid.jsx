import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n29o9wptk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n29o9wptk"/>`,
		"fallback": "streamline:device-database-encryption-1-solid",
	});
}

export default Component;
