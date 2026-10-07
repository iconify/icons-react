import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ah8o-2biv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ah8o-2biv"/>`,
		"fallback": "iconoir:gas",
	});
}

export default Component;
