import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h66rubb_x.css';

const viewBox = {"width":20,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h66rubb_x"/>`,
		"fallback": "fontisto:hangout",
	});
}

export default Component;
