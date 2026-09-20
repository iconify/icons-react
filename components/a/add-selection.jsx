import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mv7k113ce.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mv7k113ce"/>`,
		"fallback": "ix:add-selection",
	});
}

export default Component;
