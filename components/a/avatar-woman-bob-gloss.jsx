import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qytuaib8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qytuaib8v wm-k"/>`,
		"fallback": "withicons:avatar-woman-bob-gloss",
	});
}

export default Component;
