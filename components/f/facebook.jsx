import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvtk8fuky.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvtk8fuky"/>`,
		"fallback": "fa6-brands:facebook",
	});
}

export default Component;
