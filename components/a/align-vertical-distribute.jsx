import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfc18wb5o.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfc18wb5o"/>`,
		"fallback": "memory:align-vertical-distribute",
	});
}

export default Component;
