import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8k4_jb1a.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8k4_jb1a"/>`,
		"fallback": "picon:camera",
	});
}

export default Component;
