import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m05_qabul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m05_qabul"/>`,
		"fallback": "iconoir:fast-arrow-left",
	});
}

export default Component;
