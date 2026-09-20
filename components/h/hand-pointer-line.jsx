import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_4ve6b5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_4ve6b5k"/>`,
		"fallback": "majesticons:hand-pointer-line",
	});
}

export default Component;
