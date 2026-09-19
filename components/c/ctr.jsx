import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/id8_52b1s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="id8_52b1s"/>`,
		"fallback": "cryptocurrency:ctr",
	});
}

export default Component;
