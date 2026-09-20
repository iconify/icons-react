import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp2_cybfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sp2_cybfp"/>`,
		"fallback": "uil:envelope-upload",
	});
}

export default Component;
