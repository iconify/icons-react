import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xw3b5p53b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xw3b5p53b"/>`,
		"fallback": "noviair:garage-check",
	});
}

export default Component;
