import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvd8j0b0x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tvd8j0b0x"/>`,
		"fallback": "gravity-ui:cloud",
	});
}

export default Component;
