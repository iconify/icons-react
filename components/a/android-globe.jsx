import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqae7zbju.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqae7zbju"/>`,
		"fallback": "ion:android-globe",
	});
}

export default Component;
