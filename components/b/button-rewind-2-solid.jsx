import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4x21rbka.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x4x21rbka"/>`,
		"fallback": "streamline:button-rewind-2-solid",
	});
}

export default Component;
