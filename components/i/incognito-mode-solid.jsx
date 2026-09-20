import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_y-v-7px.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j_y-v-7px"/>`,
		"fallback": "streamline:incognito-mode-solid",
	});
}

export default Component;
