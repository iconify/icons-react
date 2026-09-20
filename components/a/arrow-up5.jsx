import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iud-r9o8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iud-r9o8j"/>`,
		"fallback": "reicon:arrow-up5",
	});
}

export default Component;
