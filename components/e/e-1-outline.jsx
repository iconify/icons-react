import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vs_8zwu2f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vs_8zwu2f"/>`,
		"fallback": "healthicons:e-1-outline",
	});
}

export default Component;
