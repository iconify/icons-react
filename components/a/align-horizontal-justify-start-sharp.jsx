import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm9nhgbfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qm9nhgbfm"/>`,
		"fallback": "pixelarticons:align-horizontal-justify-start-sharp",
	});
}

export default Component;
