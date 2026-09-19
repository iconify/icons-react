import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sx8ip0b3l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sx8ip0b3l"/>`,
		"fallback": "garden:asterisk-stroke-16",
	});
}

export default Component;
