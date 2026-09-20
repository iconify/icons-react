import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/veuj-zb1p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="veuj-zb1p"/>`,
		"fallback": "streamline-pixel:health-laboratory",
	});
}

export default Component;
