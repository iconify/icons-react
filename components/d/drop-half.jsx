import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4g6uk3ti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4g6uk3ti"/>`,
		"fallback": "pixelarticons:drop-half",
	});
}

export default Component;
