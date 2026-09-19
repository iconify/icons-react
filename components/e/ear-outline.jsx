import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5e0utiaa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f5e0utiaa"/>`,
		"fallback": "healthicons:ear-outline",
	});
}

export default Component;
