import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ip0-r-tkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ip0-r-tkv"/>`,
		"fallback": "mdi-light:file-alert",
	});
}

export default Component;
