import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-cmf8bft.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h-cmf8bft"/>`,
		"fallback": "healthicons:autoimmune-disease-outline",
	});
}

export default Component;
