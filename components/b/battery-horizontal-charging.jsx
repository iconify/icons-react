import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvbo4tboy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xvbo4tboy"/>`,
		"fallback": "griddy-icons:battery-horizontal-charging",
	});
}

export default Component;
