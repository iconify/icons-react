import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jz6z4yblv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jz6z4yblv"/>`,
		"fallback": "noviair-light:golf",
	});
}

export default Component;
