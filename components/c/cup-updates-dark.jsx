import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3o53phlc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3o53phlc"/>`,
		"fallback": "selfhst:cup-updates-dark",
	});
}

export default Component;
