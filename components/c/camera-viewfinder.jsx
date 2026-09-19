import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iacpvob-c.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iacpvob-c"/>`,
		"fallback": "f7:camera-viewfinder",
	});
}

export default Component;
