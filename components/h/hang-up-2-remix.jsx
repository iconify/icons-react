import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5ae8mb9b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o5ae8mb9b"/>`,
		"fallback": "streamline:hang-up-2-remix",
	});
}

export default Component;
