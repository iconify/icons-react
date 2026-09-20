import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xf530d1ux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xf530d1ux"/>`,
		"fallback": "pixelarticons:card-plus",
	});
}

export default Component;
