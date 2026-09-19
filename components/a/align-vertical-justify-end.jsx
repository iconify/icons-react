import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lie-7lbsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lie-7lbsr"/>`,
		"fallback": "hugeicons:align-vertical-justify-end",
	});
}

export default Component;
