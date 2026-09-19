import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rejth40io.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rejth40io"/>`,
		"fallback": "feather:bluetooth",
	});
}

export default Component;
