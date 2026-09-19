import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8ol-ejya.css';
import '../../css/y/ykuarwblt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8ol-ejya"/><path class="ykuarwblt"/>`,
		"fallback": "ion:android-time",
	});
}

export default Component;
