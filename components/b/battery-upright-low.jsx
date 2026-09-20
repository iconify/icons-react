import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rx98c1b-d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rx98c1b-d"/>`,
		"fallback": "ix:battery-upright-low",
	});
}

export default Component;
