import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7l_z8b7h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d7l_z8b7h"/>`,
		"fallback": "streamline:decent-work-and-economic-growth-remix",
	});
}

export default Component;
