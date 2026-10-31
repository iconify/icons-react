import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-45c4bfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-45c4bfm"/>`,
		"fallback": "coolicons:command-duocolor-round",
	});
}

export default Component;
