import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xizi9lbzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xizi9lbzi"/>`,
		"fallback": "pixelarticons:android-solid",
	});
}

export default Component;
