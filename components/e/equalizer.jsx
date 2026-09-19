import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl5w8z7ax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xl5w8z7ax"/>`,
		"fallback": "fe:equalizer",
	});
}

export default Component;
