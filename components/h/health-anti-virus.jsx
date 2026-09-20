import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac3vaqbce.css';
import '../../css/r/rf8gf5fko.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ac3vaqbce"/><path class="rf8gf5fko"/>`,
		"fallback": "streamline-pixel:health-anti-virus",
	});
}

export default Component;
