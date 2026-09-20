import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkbg14b6o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xkbg14b6o"/>`,
		"fallback": "streamline:chair-solid",
	});
}

export default Component;
