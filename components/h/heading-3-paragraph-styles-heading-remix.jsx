import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0839pe6n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l0839pe6n"/>`,
		"fallback": "streamline:heading-3-paragraph-styles-heading-remix",
	});
}

export default Component;
