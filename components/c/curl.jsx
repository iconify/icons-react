import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftt6qlmpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftt6qlmpb"/>`,
		"fallback": "thesvg:curl",
	});
}

export default Component;
