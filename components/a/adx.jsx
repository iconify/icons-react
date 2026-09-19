import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcgccqb2k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcgccqb2k"/>`,
		"fallback": "cryptocurrency:adx",
	});
}

export default Component;
