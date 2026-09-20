import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dl13osb8t.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dl13osb8t"/>`,
		"fallback": "memory:box-light-horizontal-menu-left",
	});
}

export default Component;
