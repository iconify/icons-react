import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ub3v3v1ee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ub3v3v1ee"/>`,
		"fallback": "pixelarticons:checkbox-on",
	});
}

export default Component;
