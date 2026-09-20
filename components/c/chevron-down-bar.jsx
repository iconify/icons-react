import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whi-88vin.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="whi-88vin"/>`,
		"fallback": "ix:chevron-down-bar",
	});
}

export default Component;
