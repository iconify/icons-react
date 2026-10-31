import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t71s4gkgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t71s4gkgz"/>`,
		"fallback": "withicons:circle-chevron-right-gloss",
	});
}

export default Component;
