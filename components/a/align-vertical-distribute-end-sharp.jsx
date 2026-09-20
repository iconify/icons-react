import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dki60xbsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dki60xbsk"/>`,
		"fallback": "pixelarticons:align-vertical-distribute-end-sharp",
	});
}

export default Component;
