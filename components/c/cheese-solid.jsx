import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3jq4sl8k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3jq4sl8k"/>`,
		"fallback": "streamline:cheese-solid",
	});
}

export default Component;
