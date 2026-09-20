import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8dpofbva.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y8dpofbva"/>`,
		"fallback": "streamline:global-learning-solid",
	});
}

export default Component;
