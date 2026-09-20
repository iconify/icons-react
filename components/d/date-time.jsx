import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/se4v5wb1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="se4v5wb1x"/>`,
		"fallback": "pixelarticons:date-time",
	});
}

export default Component;
