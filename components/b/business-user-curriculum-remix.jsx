import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjjz5bk1x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qjjz5bk1x"/>`,
		"fallback": "streamline:business-user-curriculum-remix",
	});
}

export default Component;
