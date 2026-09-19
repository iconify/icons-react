import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rueir2m3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rueir2m3q"/>`,
		"fallback": "cil:image1",
	});
}

export default Component;
