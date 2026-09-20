import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nef5l-igr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nef5l-igr"/>`,
		"fallback": "pixelarticons:group",
	});
}

export default Component;
