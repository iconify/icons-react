import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahq7px0qs.css';

const viewBox = {"width":1408,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahq7px0qs"/>`,
		"fallback": "fa:apple",
	});
}

export default Component;
