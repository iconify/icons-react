import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvkd-1bzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvkd-1bzm"/>`,
		"fallback": "noviair-light:download",
	});
}

export default Component;
