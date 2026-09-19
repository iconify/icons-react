import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlxtf-b1r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qlxtf-b1r"/>`,
		"fallback": "healthicons:3",
	});
}

export default Component;
