import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg6mo1bgc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg6mo1bgc"/>`,
		"fallback": "file-icons:aeternity",
	});
}

export default Component;
