import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyb02xdma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyb02xdma"/>`,
		"fallback": "thesvg:consul",
	});
}

export default Component;
