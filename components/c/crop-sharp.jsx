import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szyg5_byr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szyg5_byr"/>`,
		"fallback": "pixelarticons:crop-sharp",
	});
}

export default Component;
