import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wy0fe28yk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wy0fe28yk"/>`,
		"fallback": "streamline:button-previous-solid",
	});
}

export default Component;
