import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-9crtsag.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l-9crtsag"/>`,
		"fallback": "streamline:color-palette-solid",
	});
}

export default Component;
