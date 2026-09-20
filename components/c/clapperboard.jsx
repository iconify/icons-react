import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzzii3bkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzzii3bkf"/>`,
		"fallback": "pixelarticons:clapperboard",
	});
}

export default Component;
