import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vid58lbtx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vid58lbtx"/>`,
		"fallback": "vadivam:dice-3",
	});
}

export default Component;
