import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-c6zxvqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-c6zxvqo"/>`,
		"fallback": "thesvg-color:alibaba-cloud",
	});
}

export default Component;
