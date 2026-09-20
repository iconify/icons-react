import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y30mxi8-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y30mxi8-w"/>`,
		"fallback": "mage:chart-25-fill",
	});
}

export default Component;
