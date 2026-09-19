import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcuqi2bjf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hcuqi2bjf"/>`,
		"fallback": "healthicons:book",
	});
}

export default Component;
