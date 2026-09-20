import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx63h-s5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xx63h-s5x"/>`,
		"fallback": "streamline-ultimate:beer-opener-bold",
	});
}

export default Component;
