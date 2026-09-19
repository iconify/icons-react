import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3tz-4byh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3tz-4byh"/>`,
		"fallback": "cib:instapaper",
	});
}

export default Component;
