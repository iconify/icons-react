import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bl_xb-aqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bl_xb-aqu"/>`,
		"fallback": "withicons:blocks-gloss",
	});
}

export default Component;
