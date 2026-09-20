import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbdjepb6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbdjepb6d"/>`,
		"fallback": "simple-icons:googlechronicle",
	});
}

export default Component;
