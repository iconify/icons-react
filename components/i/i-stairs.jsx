import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/th42spb0b.css';

const viewBox = {"width":63,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="th42spb0b"/>`,
		"fallback": "medical-icon:i-stairs",
	});
}

export default Component;
