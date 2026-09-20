import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5st_wb3v.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5st_wb3v"/>`,
		"fallback": "memory:gamepad-center-fill",
	});
}

export default Component;
