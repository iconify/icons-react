import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whq8cte7i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="whq8cte7i"/>`,
		"fallback": "streamline:curly-brackets-remix",
	});
}

export default Component;
