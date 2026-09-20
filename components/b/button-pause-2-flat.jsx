import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5x8obe1p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x5x8obe1p"/>`,
		"fallback": "streamline-color:button-pause-2-flat",
	});
}

export default Component;
