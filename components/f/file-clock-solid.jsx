import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx8py8btm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xx8py8btm"/>`,
		"fallback": "iconaut:file-clock-solid",
	});
}

export default Component;
