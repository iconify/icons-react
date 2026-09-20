import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zggtthb1v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zggtthb1v"/>`,
		"fallback": "streamline:ai-gaming-spark-solid",
	});
}

export default Component;
