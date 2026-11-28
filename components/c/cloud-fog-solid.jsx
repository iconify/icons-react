import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/husiggbqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="husiggbqv"/>`,
		"fallback": "iconaut:cloud-fog-solid",
	});
}

export default Component;
