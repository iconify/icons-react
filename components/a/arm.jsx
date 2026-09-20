import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlv8tnblt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlv8tnblt"/>`,
		"fallback": "thesvg:arm",
	});
}

export default Component;
