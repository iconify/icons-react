import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw1umb0ov.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yw1umb0ov"/>`,
		"fallback": "ix:battery-upright-check",
	});
}

export default Component;
