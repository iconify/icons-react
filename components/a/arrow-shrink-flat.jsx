import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okmt9vbaw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="okmt9vbaw"/>`,
		"fallback": "streamline-color:arrow-shrink-flat",
	});
}

export default Component;
