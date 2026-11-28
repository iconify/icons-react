import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fele_wbis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fele_wbis primary"/>`,
		"fallback": "iconaut:cross-duotone",
	});
}

export default Component;
