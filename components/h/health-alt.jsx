import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2acizdil.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i2acizdil"/>`,
		"fallback": "healthicons:health-alt",
	});
}

export default Component;
