import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aidoxu2xf.css';

const viewBox = {"width":1408,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aidoxu2xf"/>`,
		"fallback": "fa:hospital-o",
	});
}

export default Component;
