import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuj9p20cj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cuj9p20cj"/>`,
		"fallback": "iconaut:circle",
	});
}

export default Component;
