import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mm9_epbay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mm9_epbay"/>`,
		"fallback": "thesvg-color:imgur",
	});
}

export default Component;
