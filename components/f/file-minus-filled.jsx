import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o20vhit8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o20vhit8l"/>`,
		"fallback": "griddy-icons:file-minus-filled",
	});
}

export default Component;
