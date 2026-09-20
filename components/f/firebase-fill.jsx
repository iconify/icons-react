import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agh7bvl2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agh7bvl2k"/>`,
		"fallback": "ri:firebase-fill",
	});
}

export default Component;
