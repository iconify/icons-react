import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke7omlttr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ke7omlttr"/>`,
		"fallback": "healthicons:alert-triangle",
	});
}

export default Component;
