import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2ze5rb0t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2ze5rb0t"/>`,
		"fallback": "fa-solid:flag",
	});
}

export default Component;
