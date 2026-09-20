import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rowf91b3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rowf91b3b"/>`,
		"fallback": "pixelarticons:badge-captions",
	});
}

export default Component;
