import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aj2c9obxk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aj2c9obxk"/>`,
		"fallback": "streamline:donut-remix",
	});
}

export default Component;
