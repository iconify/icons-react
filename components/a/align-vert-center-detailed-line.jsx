import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3chf1bcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3chf1bcg"/>`,
		"fallback": "si:align-vert-center-detailed-line",
	});
}

export default Component;
