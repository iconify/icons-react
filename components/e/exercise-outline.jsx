import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyp6cc8z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cuyp6cc8z"/>`,
		"fallback": "healthicons:exercise-outline",
	});
}

export default Component;
