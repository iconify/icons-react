import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgv4vo-wj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgv4vo-wj"/>`,
		"fallback": "thesvg-color:datagrip",
	});
}

export default Component;
