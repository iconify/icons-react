import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pj7e8rbte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pj7e8rbte"/>`,
		"fallback": "iconaut:circle-number-4-solid",
	});
}

export default Component;
