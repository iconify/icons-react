import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8i-fmzkt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8i-fmzkt"/>`,
		"fallback": "icon-park-outline:facebook",
	});
}

export default Component;
