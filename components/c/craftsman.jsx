import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqw4e6bww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqw4e6bww"/>`,
		"fallback": "thesvg-color:craftsman",
	});
}

export default Component;
