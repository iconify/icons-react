import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6sywuhsl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j6sywuhsl"/>`,
		"fallback": "streamline:heading-1-paragraph-styles-heading-solid",
	});
}

export default Component;
