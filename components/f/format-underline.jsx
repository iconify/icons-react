import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jku7b4b9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jku7b4b9n"/>`,
		"fallback": "gg:format-underline",
	});
}

export default Component;
