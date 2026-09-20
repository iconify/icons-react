import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eg8w7gxvo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eg8w7gxvo"/>`,
		"fallback": "streamline:database-check-remix",
	});
}

export default Component;
