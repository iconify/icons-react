import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3kdx2nau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3kdx2nau"/>`,
		"fallback": "boxicons:align-horizontal-justify-end",
	});
}

export default Component;
