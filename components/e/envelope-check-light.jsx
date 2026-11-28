import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ks8oc-16p.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ks8oc-16p"/>`,
		"fallback": "pullo:envelope-check-light",
	});
}

export default Component;
