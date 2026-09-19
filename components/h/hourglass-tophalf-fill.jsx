import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsyvleb2g.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsyvleb2g"/>`,
		"fallback": "f7:hourglass-tophalf-fill",
	});
}

export default Component;
