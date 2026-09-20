import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-z0-pb_d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f-z0-pb_d"/>`,
		"fallback": "streamline:chrome-solid",
	});
}

export default Component;
