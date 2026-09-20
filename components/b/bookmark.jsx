import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hf4xtbc-z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hf4xtbc-z"/>`,
		"fallback": "streamline-flex:bookmark",
	});
}

export default Component;
