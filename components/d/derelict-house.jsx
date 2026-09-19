import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz_ni_bcl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tz_ni_bcl"/>`,
		"fallback": "fluent-emoji-high-contrast:derelict-house",
	});
}

export default Component;
