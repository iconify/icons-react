import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpl4w9bmv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpl4w9bmv"/>`,
		"fallback": "file-icons:fuelux",
	});
}

export default Component;
