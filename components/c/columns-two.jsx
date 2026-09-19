import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tp5nucc6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tp5nucc6g"/>`,
		"fallback": "griddy-icons:columns-two",
	});
}

export default Component;
