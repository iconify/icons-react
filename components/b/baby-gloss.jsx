import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndrvp4m3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndrvp4m3a wm-k"/>`,
		"fallback": "withicons:baby-gloss",
	});
}

export default Component;
