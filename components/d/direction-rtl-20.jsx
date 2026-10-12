import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eba7bgh4x.css';
import '../../css/k/k-8fhdbia.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eba7bgh4x"/><path class="k-8fhdbia"/>`,
		"fallback": "garden:direction-rtl-20",
	});
}

export default Component;
