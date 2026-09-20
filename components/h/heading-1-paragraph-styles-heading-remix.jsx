import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-rz6hkhz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s-rz6hkhz"/>`,
		"fallback": "streamline:heading-1-paragraph-styles-heading-remix",
	});
}

export default Component;
