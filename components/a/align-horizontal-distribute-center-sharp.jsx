import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iygen8b9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iygen8b9j"/>`,
		"fallback": "pixelarticons:align-horizontal-distribute-center-sharp",
	});
}

export default Component;
