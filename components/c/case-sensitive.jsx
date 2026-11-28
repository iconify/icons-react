import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggor3gbxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggor3gbxr"/>`,
		"fallback": "noviair:case-sensitive",
	});
}

export default Component;
