import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oixly2cla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oixly2cla"/>`,
		"fallback": "thesvg-color:eclipse-che",
	});
}

export default Component;
