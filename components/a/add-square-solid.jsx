import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xf5i56b4h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xf5i56b4h"/>`,
		"fallback": "streamline:add-square-solid",
	});
}

export default Component;
