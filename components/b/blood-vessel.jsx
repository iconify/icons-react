import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujk35abet.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ujk35abet"/>`,
		"fallback": "healthicons:blood-vessel",
	});
}

export default Component;
