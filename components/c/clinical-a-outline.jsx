import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nomplj6bn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nomplj6bn"/>`,
		"fallback": "healthicons:clinical-a-outline",
	});
}

export default Component;
