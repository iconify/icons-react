import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx6-ebbjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xx6-ebbjb"/>`,
		"fallback": "pixelarticons:align-end-horizontal-sharp",
	});
}

export default Component;
