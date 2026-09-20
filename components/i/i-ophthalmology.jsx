import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohgar4mkn.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohgar4mkn"/>`,
		"fallback": "medical-icon:i-ophthalmology",
	});
}

export default Component;
