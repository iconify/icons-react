import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpt8mwb0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpt8mwb0q"/>`,
		"fallback": "iconaut:currency-solid",
	});
}

export default Component;
