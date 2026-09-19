import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0mi_2b8f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t0mi_2b8f"/>`,
		"fallback": "healthicons:62x-outline",
	});
}

export default Component;
