import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8h1-6bvk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q8h1-6bvk"/>`,
		"fallback": "healthicons:foot",
	});
}

export default Component;
