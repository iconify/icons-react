import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrc6a3b7t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrc6a3b7t"/>`,
		"fallback": "fa6-regular:circle",
	});
}

export default Component;
