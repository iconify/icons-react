import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsqzmj9ew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsqzmj9ew"/>`,
		"fallback": "noviair-light:alert-triangle",
	});
}

export default Component;
