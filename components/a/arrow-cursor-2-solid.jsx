import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ig391mlei.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ig391mlei"/>`,
		"fallback": "streamline-flex:arrow-cursor-2-solid",
	});
}

export default Component;
