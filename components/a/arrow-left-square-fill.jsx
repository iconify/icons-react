import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sng5_6bnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sng5_6bnr"/>`,
		"fallback": "mage:arrow-left-square-fill",
	});
}

export default Component;
