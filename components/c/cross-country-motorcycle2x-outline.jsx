import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cl1hntrbd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cl1hntrbd"/>`,
		"fallback": "healthicons:cross-country-motorcycle2x-outline",
	});
}

export default Component;
