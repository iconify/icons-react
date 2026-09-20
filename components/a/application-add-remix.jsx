import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y25th20gx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y25th20gx"/>`,
		"fallback": "streamline:application-add-remix",
	});
}

export default Component;
