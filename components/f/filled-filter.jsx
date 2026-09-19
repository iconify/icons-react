import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfmav5c8a.css';
import '../../css/k/k1fidk1yd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfmav5c8a"/><path class="k1fidk1yd"/>`,
		"fallback": "flat-color-icons:filled-filter",
	});
}

export default Component;
