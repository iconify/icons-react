import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tm7-icbdt.css';
import '../../css/f/fl5j57bvr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tm7-icbdt"/><path class="fl5j57bvr"/>`,
		"fallback": "flat-color-icons:dribbble",
	});
}

export default Component;
