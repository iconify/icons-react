import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vz3f8bglu.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vz3f8bglu"/>`,
		"fallback": "temaki:diving",
	});
}

export default Component;
