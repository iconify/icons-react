import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvzyebcqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tvzyebcqt"/>`,
		"fallback": "streamline-logos:d3js-logo-block",
	});
}

export default Component;
