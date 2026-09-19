import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0_0w2ecl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0_0w2ecl"/>`,
		"fallback": "cib:garmin",
	});
}

export default Component;
