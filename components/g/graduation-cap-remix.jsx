import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jswq0yylr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jswq0yylr"/>`,
		"fallback": "streamline:graduation-cap-remix",
	});
}

export default Component;
