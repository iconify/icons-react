import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9bi5tb2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9bi5tb2j"/>`,
		"fallback": "uil:brightness-plus",
	});
}

export default Component;
