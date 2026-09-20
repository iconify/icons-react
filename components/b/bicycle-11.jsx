import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzur78bxf.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzur78bxf"/>`,
		"fallback": "maki:bicycle-11",
	});
}

export default Component;
