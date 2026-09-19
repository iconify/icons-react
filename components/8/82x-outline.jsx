import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfcp4ccdt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qfcp4ccdt"/>`,
		"fallback": "healthicons:82x-outline",
	});
}

export default Component;
