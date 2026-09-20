import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0b-ftb9l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o0b-ftb9l"/>`,
		"fallback": "streamline-flex:computer-chip-1-remix",
	});
}

export default Component;
