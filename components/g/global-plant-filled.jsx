import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov260k97l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ov260k97l"/>`,
		"fallback": "ix:global-plant-filled",
	});
}

export default Component;
