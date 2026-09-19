import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7-7u_b9e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z7-7u_b9e"/>`,
		"fallback": "healthicons:construction",
	});
}

export default Component;
