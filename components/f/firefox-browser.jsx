import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gb88n8bfw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gb88n8bfw"/>`,
		"fallback": "fa6-brands:firefox-browser",
	});
}

export default Component;
