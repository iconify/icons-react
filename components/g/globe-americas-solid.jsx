import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3bfk1ukx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3bfk1ukx"/>`,
		"fallback": "pixel:globe-americas-solid",
	});
}

export default Component;
