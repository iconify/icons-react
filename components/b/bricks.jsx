import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gujd78f0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gujd78f0a"/>`,
		"fallback": "thesvg-color:bricks",
	});
}

export default Component;
