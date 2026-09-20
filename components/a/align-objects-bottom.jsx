import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1s550b7o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1s550b7o"/>`,
		"fallback": "ix:align-objects-bottom",
	});
}

export default Component;
