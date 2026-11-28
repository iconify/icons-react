import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osx1063bj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osx1063bj"/>`,
		"fallback": "noviair-light:forward",
	});
}

export default Component;
